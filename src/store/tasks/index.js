import actions from "./actions";
export default {
  namespaced: true,
  state: () => ({
    tasksList: [],
    task: {},
  }),
  mutations: {
    setUsertasks(state, tasks) {
      state.tasksList = tasks;
    },
    setTask(state, task) {
      state.task = task;
    },
  },
  actions,
};
