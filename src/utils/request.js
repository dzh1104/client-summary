import axios from 'axios';
import CryptoJS from 'crypto-js';
import { Message, MessageBox } from 'element-ui';

//创建axios实例
const service = axios.create({
  //api的base_url(根据环境)
  baseURL: process.env.NODE_ENV === 'development' ? '' : '',
  responseType: 'json',
  timeout: 6000
});

//不需要加密的api
const notEncryptApi = [];

const api = {
  get(url, reqData) {
    return service.get(url, {
      url: url,
      method: 'get',
      params: resData
    })
  },
  post(url, reqData) {
    return service.post(url, {
      url: url,
      method: 'post',
      data: resData
    })
  }
};

function handleReqData(reqData) {
  //是否加密
  let needAesEncrypt;
  //某些接口肯定不加密
  if (notEncryptApi.indexOf(path) !== -1) {
    needAesEncrypt = false;
  } else if (sessionStorage.getItem('decryptedKey')) {
    needAesEncrypt = true;
  } else {
    needAesEncrypt = false;
  }

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

  return reqData;
}

function handleResData(resData) {
  
}

export default api;