/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:51:58 
 * @Last Modified by:   dzh 
 * @Last Modified time: 2017-11-24 09:51:58 
 */
import fetch from 'utils/fetch';
import storage from 'utils/storage';

export default class {
  static login(username, password) {
    let path = '/auth/login';
    let reqData = {
      username,
      password
    };
    return fetch.post(path, reqData, true).then(res => {
      if (typeof res !== 'number') {
        storage.setItem('Admin-Token', 'pass');
      }
      return res;
    }).catch(err => {
      console.log('err', err);
    })
  }

  static getUserInfo() {
    let path = '/auth/info';
    let reqData = {
      
    };
  }
}
