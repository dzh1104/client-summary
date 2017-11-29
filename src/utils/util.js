/**
 * @description 判断一个对象是否为空对象
 * @param {Object} obj
 * @returns {Boolean} true 空对象 false 非空对象
 */
export function isEmptyObj(obj) {
  if (checkType(obj) !== '[object Object]') {
    throw new Error('isEmptyObj方法参数应用对象类型');
  }
  for (let key in obj) {
    return false;
  }
  return true;
}

/**
 * @description 参数调用Object.prototype.toString方法，返回其返回值
 * @param {*} arg 
 */
export function checkType(arg) {
  return Object.prototype.toString.call(arg);
}
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

  // 数组循环用for...of
  for (let ele of arr) {
    if (ele) {
      extend(res, ele);
    }
  }
  return res;
};

/**
 * @description 可接受多个对象参数，将后面的对象混合到第一个对象参数上
 * @param {Object} target 
 */
export function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
}

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
/**
 * @description 判断两个数组是否相等(元素为基本类型)
 * @param {Array} a
 * @param {Array} b
 */
export const arrayEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) {
    return true;
  }

  if (!(a instanceof Array)) {
    return false;
  }

  if (!(b instanceof Array)) {
    return false;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0, len = a.length; i !== len; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

/**
 * @description 对象数组的分组(联系人按姓拼音首字母分组、列表数据按时间分组)
 * @param {[Object...]} collection 
 * @param {Function} groupFn 
 */
export function groupBy(collection, groupFn) {
  var tmpObj = {};
  for (var item of collection) {
    //传入数组元素，调用分组函数，获得分组标示
    var mark = groupFn(item);
    //通过mark，在对象中取得数据 
    var data = tmpObj[mark];

    /*
    if (data === undefined) {
        tmpObj[mark] = [item];
    }else {
        //若不为undefined，表示有分组，直接推入
        data.push(item);
    }
    */

    // 使用三元操作符代替if...else语句

    //若数据为undefined，表示这个mark还没有分组，以这个mark为字段，值为数组类型
    data === undefined ? tmpObj[mark] = [item] : data.push(item);
  }

  //应返回一个数据类型为对象数组，这个对象的格式是两个字段
  //key: 分组的标示
  //data: 属于这个组的所有item
  var tmpArr = [];
  for (var key in tmpObj) {
    // key-value的拆分，便于循环取值
    var o = {
      key: key,
      data: tmpObj[key]
    };
    tmpArr.push(o);
  }

  return tmpArr;
}

/**
 * @description 对一个数组进行排序，排序规则由传入的orderFn决定，拿到数组的两个元素，取得item的属性(字段)，再对这个value值得类型进行判断,数值直接相减，字符串按着localeCompare
 * @param {Array} objArr 
 * @param {Function} orderFn 
 * @param {String} orderType 
 */
function sortBy(objArr, orderFn, orderType = 'asc') {

  objArr.sort((item1, item2) => {

    var compareNum = orderFn(item1, item2);
    if (orderType === 'desc') {
      compareNum = -compareNum;
    }

    return compareNum;
  });

  // 不需要返回数组，sort变异方法
  // return objArr;
}

function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }

  const targetObj = source.constructor === Array ? [] : {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object') {
        targetObj[key] = source[key].constructor === Array ? [] : {};
        targetObj[key] = deepClone(source[key]);
      } else {
        targetObj[key] = source[key];
      }
    }
  }

  return targetObj;
}
