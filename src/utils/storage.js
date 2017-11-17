const storage = window.sessionStorage;

export default class {
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