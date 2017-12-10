import fetch from 'utils/fetch';
import storage from 'utils/storage';
import store from 'store';

export default class {
  static login(username, password) {
    let path = '/auth/login';
    let reqData = {
      username,
      password
    };
    return fetch.post(path, reqData).then(res => {
      if (typeof res !== 'number') {
        storage.setItem('Admin-Token', 'pass');
      }
      return res;
    }).catch(err => {
      console.log('err', err);
    })
  }

  static regist(username, password, repassword) {
    let path = '/auth/regist';
    let reqData = {
      username,
      password,
      repassword
    };
    return fetch.post(path, reqData).then(res => {
      return res;
    }).catch(err => {
      console.log(err);
    })
  }

  static getUserInfo(username) {
    let path = '/auth/info';
    let reqData = {
      username
    };
    return fetch.get(path, reqData).then(res => {
      if (typeof res === 'number') {
        return res;
      }
      store.commit('SET_ROLES', res.roles);
      store.commit('SET_USERNAME', res.username);
      store.commit('SET_AVATAR', res.avatar);
      store.commit('SET_INTRODUCTION', res.introduction);
      return res;
    }).catch(err => {
      return err;
    })
  }

  static clientLogout() {
    return new Promise((resolve, reject) => {
      storage.removeItem('Admin-Token');
      resolve();
    })
  }
}
