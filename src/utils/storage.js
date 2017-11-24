/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:53:43 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-24 10:05:30
 */
const storage = window.sessionStorage;

export default class {
  //若不存在对应的key，返回null
  static getItem(key) {
    return JSON.parse(storage.getItem(key));
  }

  static setItem(key, value) {
    value = JSON.stringify(value);
    storage.setItem(key, value);
  }

  static removeItem(key) {
    storage.removeItem(key);
  }

  static clear() {
    storage.clear();
  }
}