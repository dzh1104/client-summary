import Vue from 'vue';
import Router from 'vue-router';

// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('./_import_' + process.env.NODE_ENV);

import Layout from 'views/layout/index.vue';

Vue.use(Router);

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    role: ['admin','editor']     will control the page role (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [{
  path: '/login',
  component: _import('login/index'),
  hidden: true
}, {
  path: '/404',
  component: _import('errorPage/404'),
  hidden: true
}, {
  path: '/partice',
  name: 'partice',
  hidden: true,
  component: _import('partice/index')
}, {
  path: '/401',
  component: _import('errorPage/401'),
  hidden: true
}, {
  path: '',
  component: Layout,
  redirect: 'home',
  hidden: true,
  children: [{
    path: 'home',
    name: 'home',
    component: _import('home/index'),
    meta: {
      title: 'home',
      icon: 'home',
      noCache: true
    }
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
    name: 'example',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      role: ['admin'],
      title: 'Example',
      icon: 'example'
    },
    children: [{
      path: 'index',
      name: 'form',
      component: _import('page/index'),
      meta: {
        title: 'Form',
        icon: 'form'
      }
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
        role: ['admin']
      }
    }]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
