const app = {
  state: {
    sidebar: {
      isOpen: false
    }
  },
  mutations: {
    SET_SIDEBAR_OPEN: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    }
  }
};

export default app;
