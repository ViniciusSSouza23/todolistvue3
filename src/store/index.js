import { createStore } from "vuex";
import user from "./user";
import tasks from "./tasks";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    tasks,
  },
});
