import { constantRouterMap } from 'router';

const state = {
  username: '',
  roles: [],
  avatar: '',
  introduction: '',
  routes: constantRouterMap,
  asyncRoutes: []
};

const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_USERNAME: (state, username) => {
    state.username = username;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_ASYNCROUTES: (state, asyncRoutes) => {
    state.asyncRoutes = asyncRoutes;
  },
  SET_ROUTES: (state, asyncRoutes) => {
    state.routes = constantRouterMap.concat(asyncRoutes);
  }
};

export default {
  state,
  mutations
}