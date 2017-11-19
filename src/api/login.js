import fetch from 'utils/fetch';

export default class {
  static login(username, password, repassword) {
    let path = '/login/register';
    let postData = {
      username,
      password,
      repassword
    };
    return fetch.post(path, postData).then(res => {
      return res;
    }).catch(err => {

    })
  }
}