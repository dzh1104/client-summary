// 组件导入使用require default的解释 https://segmentfault.com/q/1010000011171159/a-1020000011186362
module.exports = file => require('views/' + file + '.vue').default // vue-loader at least v13.0.0+
