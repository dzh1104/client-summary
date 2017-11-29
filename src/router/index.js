import Vue from 'vue';
import Router from 'vue-router';

// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('./_import_' + process.env.NODE_ENV);

import Layout from 'views/layout/index.vue';

Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirect in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export const constantRouterMap = [{
  path: '/login',
  name: 'Login',
  hidden: true,
  component: _import('login/index')
}, {
  path: '/404',
  name: '404',
  hidden: true,
  component: _import('errorPage/404')
}, {
  path: '/partice',
  name: 'partice',
  hidden: true,
  component: _import('partice/index')
}, {
  path: '/',
  component: Layout,
  name: 'home',
  hidden: true,
  redirect: 'home',
  children: [{
    path: 'home',
    component: _import('home/index')
  }]
}];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  linkActiveClass: 'router-link-active',
  routes: constantRouterMap
});

export const asyncRouterMap = [{
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'example',
    icon: 'zujian',
    children: [{
      path: 'index',
      name: 'form',
      icon: 'zonghe',
      component: _import('page/index')
    }]
  },

  {
    path: '/table',
    component: Layout,
    redirect: 'tubiao',
    noDropdown: true,
    children: [{
      path: 'index',
      name: 'table',
      component: _import('table/index'),
      meta: {
        role: ['admin3']
      }
    }]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
