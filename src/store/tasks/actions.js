export default {
  getUserTasks(context, user_id) {
    return new Promise((resolve, reject) => {
      window.axios
        .get(`/users/${user_id}/tasks`)
        .then((response) => {
          context.commit("setUserTasks", response.data);
          resolve(response);
        })
        .catch(reject);
    });
  },
  getTask(context, { user_id, task_id }) {
    return new Promise((resolve, reject) => {
      window.axios
        .get(`/users/${user_id}/tasks/${task_id}`)
        .then((response) => {
          context.commit("setTask", response.data);
          resolve(response);
        })
        .catch(reject);
    });
  },
  createTask(context, { user_id, data }) {
    return new Promise((resolve, reject) => {
      window.axios
        .post(`/users/${user_id}/tasks`, data)
        .then((response) => {
          resolve(response);
        })
        .catch(reject);
    });
  },
  updateTask(context, { user_id, data }) {
    return new Promise((resolve, reject) => {
      window.axios
        .put(`/users/${user_id}/tasks`, data)
        .then((response) => {
          resolve(response);
        })
        .catch(reject);
    });
  },
  deleteTask(context, { user_id, task_id }) {
    return new Promise((resolve, reject) => {
      window.axios
        .delete(`/users/${user_id}/tasks/${task_id}`)
        .then((response) => {
          resolve(response);
        })
        .catch(reject);
    });
  },
};
