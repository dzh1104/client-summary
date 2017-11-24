// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('../_import_' + process.env.NODE_ENV);

import Layout from 'webV/layout/index.vue';

const webRoutes = [{
  path: '/login',
  name: 'Login',
  component: _import('login/index')
}, {
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
}];

export default webRoutes;
