/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:51:27 
 * @Last Modified by:   dzh 
 * @Last Modified time: 2017-11-24 09:51:27 
 */
module.exports = file => () => import('@/views/' + file + '.vue')
