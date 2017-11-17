// axios中文https://www.kancloud.cn/yunye/axios/234845
import axios from 'axios';
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

const api = {
  get(url, reqData, needAlert = true) {
    console.log('reqData', reqData);
    return service.get(url, {
      url: url,
      method: 'get',
      params: reqData
    }).then(resData => {
      return handleResData(resData, needAlert);
    }).catch(error => {
      return handleError(error, needAlert);
    })
  },
  post(url, reqData, needAlert = true) {
    service.post(url, {
      url: url,
      method: 'post',
      data: reqData
    }).then(resData => {
      return handleResData(resData, needAlert);
    }).catch(error => {
      return handleError(error, needAlert);
    })
  }
};

/**
 * @param resData 接口返回的数据
 * @param needAlert 是否需要弹框或额外处理
 */
function handleResData(resData, needAlert) {
  return resData;
}

/**
 * @description 这种是请求的错误，并非业务上的错误，业务上的错误需要在处理返回数据中处理handleResData
 * @param {Object} error 接口错误对像
 */
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
