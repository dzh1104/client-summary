import fetch from 'utils/fetch';

export default class {
  static login(username, password) {
    let path = '/user/login';
    let reqData = {
      username,
      password
    };
    return fetch.post(path, reqData, true).then(res => {
      return res;
    }).catch(err => {
      console.log('err', err);
    })
  }

  static regist(username, password, repassword) {
    let path = '/user/regist';
    let reqData = {
      username,
      password,
      repassword
    };
    return fetch.post(path, reqData).then(res => {
      return res;
    }).catch(err => {
      console.log('err', err);
    })
  }
    return fetch.put(path, reqData).then(res => {
      return res;
    }).catch(err => {
  }

  static testDelete() {
    let path = '/user';
    let reqData = {
      id: 7878
    };
    return fetch.delete(path, reqData).then(res => {
      return res;
    }).catch(err => {
      console.log('err', err);
    })
  }
}