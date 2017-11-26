import {
  asyncRouterMap,
  constantRouterMap
} from './index';
import store from 'store';
/**
 * 通过当前路由的meta.role判断是否与当前用户权限匹配
 * @param {any} roles 
 * @param {any} route 
 */
export function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => {
      route.meta.role.indexOf(role) >= 0;
    })
  }
  return true;
}
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param {any} asyncRouterMap 
 * @param {any} roles 
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        // 过滤子路由
        route.children = filterAsyncRouter(route.children, roles); // 没有返回空数组，在下面操作中被删除
      }

      // 此处处理，省去页面中取得路由数据的判断
      
      // 如果children的长度为0 或者 route没有children属性，删除route的children
      // if (!route.children || route.children.length === 0) {
      //   delete route.children;
      // } else if (route.redirect !== 'noredirect') {
      //   // 如果父路由需要重定向，重定向到第一个子路由
      //   route.redirect = route.children[0].path;
      // }

      return true;
    }
    return false;
  });
  console.log('accessedRouters filterAsyncRouter', accessedRouters);
  return accessedRouters;
}

export function getAsyncRoutes(roles) {
  let accessedRouters = [];
  if (roles.indexOf('admin') >= 0) {
    accessedRouters = asyncRouterMap;
  } else {
    accessedRouters = filterAsyncRouter(asyncRouterMap, roles);
  }
  console.log('accessedRouters getAsyncRoutes', accessedRouters);
  store.commit('SET_ASYNCROUTES', accessedRouters);
  store.commit('SET_ROUTES', accessedRouters);
  return accessedRouters;
}
