const app = {
  state: {
    sidebar: {
      open: true
    }
  },
  mutations: {
    SET_SIDEBAR_OPEN: (state) => {
      state.sidebar.open = !state.sidebar.open;
    }
  }
};

export default app;
