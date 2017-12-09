const app = {
  state: {
    sidebar: {
      open: false
    }
  },
  mutations: {
    SET_SIDEBAR_OPEN: (state) => {
      state.sidebar.open = !state.sidebar.open;
    }
  }
};

export default app;
