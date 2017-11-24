/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:51:48 
 * @Last Modified by:   dzh 
 * @Last Modified time: 2017-11-24 09:51:48 
 */

// 组件导入使用require default的解释 https://segmentfault.com/q/1010000011171159/a-1020000011186362
module.exports = file => require('webV/' + file + '.vue').default // vue-loader at least v13.0.0+
