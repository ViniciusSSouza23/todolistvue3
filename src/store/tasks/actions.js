export default {
  getUserTasks(context, user_id) {
    return new Promise((resolve, reject) => {
      window.axios
        .get(`/tasks`)
        .then((response) => {
          const res = response.data.filter((c)=>{
            if(c.user_id && c.user_id == user_id){
              return c;
            }
          })
          console.log(res)
          context.commit("setUserTasks", res);
          resolve(response);
        })
        .catch(reject);
    });
  },
  getTask(context,  task_id ) {
    return new Promise((resolve, reject) => {
      window.axios
        .get(`/tasks/${task_id}`)
        .then((response) => {
          context.commit("setTask", response.data);
          resolve(response);
        })
        .catch(reject);
    });
  },
  createTask(context, {  data }) {
    return new Promise((resolve, reject) => {
      window.axios
        .post(`/tasks`, data)
        .then((response) => {
          resolve(response);
        })
        .catch(reject);
    });
  },
  updateTask(context,   data ) {
    return new Promise((resolve, reject) => {
      window.axios
        .put(`/tasks/${data.id}`, data)
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
