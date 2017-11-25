// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('../_importApp_' + process.env.NODE_ENV);

const webAppRoutes = [{
    path: '/login',
    name: 'Login',
    component: _import('login/index')
}];





export default webAppRoutes;
