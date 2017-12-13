import Vue from 'vue';
import Router from 'vue-router';

// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('./_import_' + process.env.NODE_ENV);

import Layout from 'views/layout/index.vue';

Vue.use(Router);

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive :include="cachedViews"> the same name as the views component (must set!!!)
* meta : {
    role: ['admin','editor']     will control the page role (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    isCache: true                if fasle ,the page will no be cached(default is false)
  }
**/
// 最后一级的路由name必须加，为了isCache，组件的name同名
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
  // 没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由
  path: '', // 空路由
  component: Layout,
  redirect: 'home', // 这个需要重定向，这个和sidebar区分开，没有匹配到时，直接重定向到home，而sidebar中的路径是点击跳转的路由路径
  // hidden: true,
  children: [{
    path: 'home',
    component: _import('home/index'),
    name: 'home',
    meta: {
      title: 'home',
      icon: 'home',
      isCache: true
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
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('svg-icons/index'),
      name: 'icons',
      meta: {
        title: 'icons',
        icon: 'icon',
        isCache: true
      }
    }]
  },

  {
    path: '/example',
    component: Layout,
    // redirect: '/example/table/dynamic-table/drag-table',
    // name: 'example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [{
        path: '/example/table',
        component: _import('example/table/index'),
        // redirect: '/example/table/dynamic-table/drag-table',
        name: 'Table',
        meta: {
          title: 'Table',
          icon: 'table'
        },
        children: [{
            path: '/example/table/dynamic-table',
            component: _import('example/table/dynamicTable/index'),
            // redirct: '/example/table/dynamic-table/drag-table',
            name: 'dynamicTable',
            meta: {
              title: 'dynamicTable'
            },
            children: [{
              path: 'drag-table',
              component: _import('example/table/dragTable'),
              name: 'dragTable2',
              meta: {
                title: 'dragTable'
              }
            }, {
              path: 'drag-table3',
              component: _import('example/table/dragTable'),
              name: 'dragTable3',
              meta: {
                title: 'dragTable'
              }
            }]
          },
          {
            path: 'drag-table',
            component: _import('example/table/dragTable'),
            name: 'dragTable',
            meta: {
              title: 'dragTable'
            }
          },
          {
            path: 'inline-edit-table',
            component: _import('example/table/inlineEditTable'),
            name: 'inlineEditTable',
            meta: {
              title: 'inlineEditTable'
            }
          },
          {
            path: 'complex-table',
            component: _import('example/table/complexTable'),
            name: 'complexTable',
            meta: {
              title: 'complexTable'
            }
          }
        ]
      },
      {
        path: 'tab',
        icon: 'tab',
        component: _import('example/tab/index'),
        name: 'tab',
        meta: {
          title: 'tab'
        }
      }
    ]
  },

  {
    path: '/advance',
    component: Layout,
    // name: 'advance',
    meta: {
      title: 'advance',
      icon: 'advance'
    },
    children: [{
      path: 'api',
      component: _import('advance/api/index'),
      name: 'api',
      meta: {
        title: 'api',
        icon: 'api'
      }
    }, {
      path: 'dblclick',
      component: _import('advance/dblclick/index'),
      name: 'dblclick',
      meta: {
        title: 'dblclick',
        icon: 'dblclick'
      }
    }, {
      path: 'timeout',
      component: _import('advance/timeout/index'),
      name: 'timeout',
      meta: {
        title: 'timeout',
        icon: 'timeout'
      }
    }, {
      path: 'dytemp',
      component: _import('advance/dytemp/index'),
      name: 'dytemp',
      meta: {
        title: 'dytemp',
        icon: 'dytemp'
      }
    }]
  },

  {
    path: '/components',
    component: Layout,
    // name: 'components',
    meta: {
      title: 'components',
      icon: 'component'
    },
    children: [{
      path: 'dialog',
      component: _import('components/dialog/index'),
      name: 'dialog',
      meta: {
        title: 'dialog',
        icon: 'dialog'
      }
    }, {
      path: 'input',
      component: _import('components/input/index'),
      name: 'input',
      meta: {
        title: 'input',
        icon: 'input'
      }
    }, {
      path: 'backtotop',
      component: _import('components/backToTop/index'),
      name: 'backToTopDemo',
      meta: {
        title: 'backtotop',
        icon: 'up'
      }
    }]
  },

  {
    path: '/chart',
    component: Layout,
    // name: 'chart',
    meta: {
      title: 'chart',
      icon: 'chart'
    },
    children: [{
      path: 'bar',
      component: _import('chart/bar/index'),
      name: 'chart-bar',
      meta: {
        title: 'bar',
        icon: 'bar'
      }
    }, {
      path: 'line',
      component: _import('chart/line/index'),
      name: 'chart-line',
      meta: {
        title: 'line',
        icon: 'line'
      }
    }, {
      path: 'map',
      component: _import('chart/map/index'),
      name: 'chart-map',
      meta: {
        title: 'map',
        icon: 'map'
      }
    }]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
