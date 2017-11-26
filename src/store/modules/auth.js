/*
 * @Author: dzh 
 * @Date: 2017-11-24 13:38:17 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-24 13:41:29
 */
const state = {
  username: '',
  roles: []
};

const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

export default {
  state,
  mutations
}