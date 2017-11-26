/*
 * @Author: dzh 
 * @Date: 2017-11-24 13:38:20 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-26 17:28:20
 * 
 * 要在页面中使用的vuex数据，先在getters中统一返回，页面中使用mapGetters取得
 * 
 */
const getters = {
  username: state => state.auth.username,
  roles: state => state.auth.roles,
  routes: state => state.auth.routes
};

export default getters;