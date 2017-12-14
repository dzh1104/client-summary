import fetch from 'utils/fetch';

export default class {
  static getPtList() {
    let path = '/patients';
    let reqData = {};
    return fetch.post(path, reqData).then(res => {
      return res;
    }).catch(err => {
      console.log('err', err);
    })
  }

  static createPt() {
    let path = '/patients';
    let reqData = {
      
    };
    return fetch.put(path, reqData).then(res => {
      return res;
    }).catch(err => {
      console.log('err', err);
    })
  }
}