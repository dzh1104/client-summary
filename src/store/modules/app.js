const app = {
  state: {
    sidebar: {
      isOpen: true
    }
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
    }
  }
};

export default app;
