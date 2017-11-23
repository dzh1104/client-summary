import fetch from 'utils/fetch';

export default class {
  static regist(username, password, repassword) {
    let path = '/users';
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
}