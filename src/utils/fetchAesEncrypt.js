/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:53:38 
 * @Last Modified by:   dzh 
 * @Last Modified time: 2017-11-24 09:53:38 
 */
// axios中文https://www.kancloud.cn/yunye/axios/234845
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {
  Message,
  MessageBox
} from 'element-ui';

//创建axios实例
const service = axios.create({
  //api的base_url(根据环境)
  baseURL: process.env.NODE_ENV === 'development' ? '/dev' : '',
  responseType: 'json',
  // 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise
  // 大于等于200 小于300 通过校验 resolve
  // 错误处理的方式参考廖雪峰https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014735944539193ab2edd2740f44a79efb438a05e83727000
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },
  timeout: 6000
});

//不需要加密的api
const notEncryptApi = [];

const api = {
  get(url, reqData, needAlert = true) {
    reqData = handleReqData(url, reqData);
    console.log('reqData', reqData);
    return service.get(url, {
      url: url,
      method: 'get',
      params: {
        data: reqData
      }
    }).then(resData => {
      return handleResData(resData, needAlert);
    }).catch(error => {
      return handleError(error, needAlert);
    })
  },
  post(url, reqData, needAlert = true) {
    reqData = handleReqData(url, reqData);
    service.post(url, {
      url: url,
      method: 'post',
      data: {
        data: reqData
      }
    }).then(resData => {
      return handleResData(resData, needAlert);
    }).catch(error => {
      return handleError(error, needAlert);
    })
  }
};

//判断是否加密
function needAesEncryptFn(url) {
  //是否加密
  let needAesEncrypt = false;
  //某些接口肯定不加密
  if (notEncryptApi.indexOf(url) !== -1) {
    needAesEncrypt = false;
    //查看登录接口是否有储存key，有则加密，没有则不加密
  } else if (sessionStorage.getItem('decryptedKey')) {
    needAesEncrypt = true;
  }
  return needAesEncrypt;
}

function handleReqData(url, reqData) {
  let needAesEncrypt = needAesEncryptFn(url);
  reqData = JSON.stringify(reqData);
  if (needAesEncrypt) {
    let iv = CryptoJS.enc.Utf8.parse(sessionStorage.getItem('decryptedIv'));
    let key = CryptoJS.enc.Utf8.parse(sessionStorage.getItem('decryptedKey'));
    //需要加密
    reqData = CryptoJS.AES.encrypt(reqData, key, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Iso10126,
      iv: iv
    }).toString();
  }

  console.log('reqData', reqData);
  return reqData;
}

function handleResData(resData, needAlert) {
  let needAesEncrypt = needAesEncryptFn(url);
}

//这种是请求的错误，并非业务上的错误，业务上的错误需要在处理返回数据中处理handleResData
function handleError(error) {
  if (error.response) {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    // 利用element-ui的Message统一弹出
    Message({
      message: error.response.status,
      type: 'error',
      duration: 3000,
      showClose: true
    })
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}

export default api;
