/*
 * @Author: dzh 
 * @Date: 2017-11-24 13:38:20 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-24 14:00:49
 * 
 * 要在页面中使用的vuex数据，先在getters中统一返回，页面中使用mapGetters取得
 * 
 */
const getters = {
  username: state => state.auth.username
};

export default getters;