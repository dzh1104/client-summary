/*
 * @Author: dzh 
 * @Date: 2017-11-24 10:00:23 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-12-09 14:33:51
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

//添加路由钩子，控制权限
import 'utils/permission';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//register globally component
import IconSvg from 'components/icons-svg';
Vue.component('svg-icon', IconSvg);

//引入reset.scss
import 'styles/index.scss';

// 直接引入即可,即可在页面中直接使用符号'_'
import lodash from 'lodash';

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
