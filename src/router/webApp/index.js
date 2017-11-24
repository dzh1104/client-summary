// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('../_import_' + process.env.NODE_ENV);

const webAppRoutes = [];

export default webAppRoutes;
