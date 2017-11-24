import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import webRoutes from './web'; // web端路由
import webAppRoutes from './webApp' // webApp路由

import isPc from 'utils/isPc';

let finalRoutes = [];
if (isPc()) {
  finalRoutes = webRoutes;
} else {
  finalRoutes = webAppRoutes;
}

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'router-link-active',
  routes: finalRoutes
})
