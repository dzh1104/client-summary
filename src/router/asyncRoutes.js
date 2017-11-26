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
        route.children = filterAsyncRouter(route.children, roles);
      }
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
