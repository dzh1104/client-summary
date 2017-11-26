/*
 * @Author: dzh 
 * @Date: 2017-11-24 10:00:28 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-26 13:07:14
 */
import router from 'router';
import store from 'store';
import storage from 'utils/storage';
import NProgress from 'nprogress'; //Progress 进度条
import 'nprogress/nprogress.css' //Progress 进度条样式
import addAsyncRoutes from 'router/addAsyncRoutes'; // 使用路由addRoutes方法 添加异步路由
import { hasPermission } from 'router/addAsyncRoutes'; // 通过当前路由的meta.role判断是否与当前用户权限匹配
import authApi from 'api/auth';
import {
  Message
} from 'element-ui';

// register global progress
const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress  
  if (storage.getItem('Admin-Token')) { // 判断是否有token

    if (to.path === '/login') {

      next({
        path: '/'
      });
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！

    } else {

      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        authApi.getUserInfo().then(res => { // 拉取user_info
          const roles = res.roles;
          addAsyncRoutes(roles, router); // 动态添加可访问路由表
          next(to); // hack方法 确保addRoutes已完成
        }).catch(err => {

        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.role)) {
          next();
        } else {
          next({
            path: '/401',
            query: {
              noGoBack: true
            }
          })
          NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行
        }
        // 可删 ↑
      }
    }

  } else {

    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }

  }
});

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
