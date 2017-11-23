import Vue from 'vue';
import Router from 'vue-router';
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router);

import Layout from 'views/layout';

export default new Router({
  mode: 'hash',
  linkActiveClass: 'router-link-active',
  routes: [{
    path: '/login',
    name: 'Login',
    component: _import('login/index')
  },{
    path: '/404',
    name: '404',
    component: _import('errorPage/404')
  }, {
    path: '/',
    name: 'Layout',
    component: Layout
  }, {
    path: '*',
    redirect: '/404'
  }]
})
