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