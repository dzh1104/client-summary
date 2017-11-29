/*
 * vuex中的数据变更仅使用mutations(不用actions)，而且仅仅负责变更数据，其他逻辑全都提取到各个功能模块中
 * 变更数据只使用vuex的mutations，且在mutations中只负责变更数据，逻辑处理全都抽离
 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import auth from './modules/auth';
import app from './modules/app';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    app
  },
  getters
});

export default store;