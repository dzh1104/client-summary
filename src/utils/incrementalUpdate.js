import storage from 'utils/storage';
import CryptoJS from 'crypto-js';
import {
  checkType
} from './util';

export default class {
  /**
   * 
   * @param {Number} pageNo 页码数 无页码数(全量)传0 
   * @param {String} apiName 接口名
   * @returns {String} recordId唯一标识 session存储的key
   */
  static getRecordId(pageNo, apiName) {
    const hash = window.location.hash;
    const recordId = CryptoJS.MD5(hash + pageNo).toString();
    console.log('recordId', recordId);
    return recordId;
  }

  /**
   * 
   * @param {Number} pageNo 页码数 无页码数(全量)传0 
   * @param {String} apiName 接口名
   * @param {Boolean | Object} arg
   * @returns {Object} 若有增量且有数据 返回 数据 增量但是首次 返回null 其他返回null 
   */
  static getRecordData(pageNo, apiName, arg) {
    console.log('arg', arg);
    let flag = true;
    let {
      values
    } = Object;
    if (typeof arg === 'boolean') {
      flag = arg;
    } else if (typeof arg === 'object') {
      for (let value of values(arg)) {
        let type = checkType(value);
        console.log('type', type);
        switch (type) {
          case '[object String]':
            if (value !== '') {
              flag = false;
            }
            break;
          case '[object Array]':
            if (value.length !== 0) {
              flag = false;
            }
            break;
          case '[object Boolean]':
            if (value) {
              flag = false;
            }
            break;
          default: 
            flag = true;
        }
        if (!flag) {
          flag = null;
          break;
        }
      }
    }
    const recordId = this.getRecordId(pageNo, apiName);
    const recordData = storage.getItem(recordId);
    return recordData;
  }
}
