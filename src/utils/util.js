/**
 * @description 判断一个属性是否是一个对象的自有属性，而不是通过原型链继承来的
 * @param {Object} obj 
 * @param {String} key 
 * @returns {Boolean} 
 */
export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

/**
 * @description 一个对象扩展到另外一个对象，返回扩展后的对象
 * @param {Object} to 
 * @param {Object} _from 
 * @returns {Object}
 */
function extend(to, _from) {
  for (let prop in _from) {
    to[prop] = _from[prop];
  }

  return to;
}

/**
 * @description 一个对象数组，生成一个对象
 * @param {[Object, object...]} arr
 * @returns {Object} 
 */
export function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
};

/**
 * @description 通过路径获取一个对象的value
 * @param {Object} obj 
 * @param {String} prop 通过.连接的字段名 
 */
export const getValueByPath = function (obj, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = obj;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }

  return result;
}
