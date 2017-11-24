/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:53:26 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-24 13:44:06
 * 
 * vuex中的数据变更仅使用mutations(不用actions)，而且仅仅负责变更数据，其他逻辑全都提取到各个功能模块中
 * 
 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth
  },
  getters
});

export default store;