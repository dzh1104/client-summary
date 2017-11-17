import fetch from 'utils/fetch';

export default class {
  static login(username, password) {
    let path = '/login';
    let postData = {
      username,
      password
    };
    return fetch.post(path, postData).then(res => {
      return res;
    }).catch(err => {

    })
  }
}