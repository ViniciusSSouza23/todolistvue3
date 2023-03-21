import actions from "./actions";
export default {
  namespaced: true,
  state: () => ({
    tasksList: [],
    task: {},
  }),
  mutations: {
    setUserTasks(state, tasks) {
      state.tasksList = tasks;
    },
    setTask(state, task) {
      state.task = task;
    },
  },
  actions,
};
