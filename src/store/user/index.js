import actions from "./actions";

export default {
  namespaced: true,
  state: () => ({
    userList: [],
    user: {},
  }),
  mutations: {
    setUserList(state, users) {
      state.userList = users;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions,
};
