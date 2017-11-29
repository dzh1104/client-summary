/*
 * 要在页面中使用的vuex数据，先在getters中统一返回，页面中使用mapGetters取得
 */
const getters = {
  // auth
  username: state => state.auth.username,
  roles: state => state.auth.roles,
  routes: state => state.auth.routes,

  // app
  sidebar: state => state.app.sidebar
};

export default getters;
