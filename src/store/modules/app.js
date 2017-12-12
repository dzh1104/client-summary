const app = {
  state: {
    sidebar: {
      isOpen: true
    },
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    /**
     * 1.hamburger中设置
     *    hamburger中的样式改变
     *    layout中的样式改变
     *    sidebar中el-menu的collapse模式是否水平折叠收起菜单
     */
    SET_SIDEBAR_OPEN: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    },
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) {
        return;
      }
      state.visitedViews.push({
        name: view.name,
        path: view.path,
        title: view.meta.title || 'no-name'
      });
      if (view.meta.isCache) {
        state.cachedViews.push(view.name);
      }
    },
    DEL_VISITED_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexof(i);
          state.cachedViews.splice(index, 1);
          break;
        }
      }
    }
  }
};

export default app;
