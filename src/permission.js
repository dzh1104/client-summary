import router from './router';
import store from 'store';
import storage from 'utils/storage';
import NProgress from 'nprogress'; //Progress 进度条
import 'nprogress/nprogress.css' //Progress 进度条样式
import {
  Message
} from 'element-ui';

// register global progress
const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress  
  if (storage.getItem('Admin-Token')) { // 判断是否有token

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
