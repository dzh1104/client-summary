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
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i]) {
  //     extend(res, arr[i]);
  //   }
  // }
  
  // 数组循环用for...of
  for (let ele of arr) {
    if (ele) {
      extend(res, ele);
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

    //赋值时机
    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }

  return result;
};

/**
 * @description 根据路径获取一个对象的key value和包含它们的对象，返回一个包含三者的对象
 * @param {Object} obj 
 * @param {String} path 
 * @param {Boolean} strict 
 */
export function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  // 方括号语法 '[person1][state][name]'
  path = path.replace(/\[(\w+)\]/g, '.$1');
  console.log('path1', path);
  // 去除首个. '.person1.name'
  path = path.replace(/^\./, '');
  console.log('path2', path);

  let keyArr = path.split('.');
  console.log('keyArr', keyArr);
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
};
