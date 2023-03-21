export default {
  getUsers(context) {
    return new Promise((resolve, reject) => {
      window.axios
        .get("/users")
        .then((response) => {
          console.log(response.data)
          context.commit("setUserList", response.data);
          resolve(response);
        })
        .catch(reject);
    });
  },
  getUser(context, id) {
    return new Promise((resolve, reject) => {
      window.axios
        .get(`/users/${id}`)
        .then((response) => {
          context.commit("setUser", response.data);
          resolve(response);
        })
        .catch(reject);
    });
  },
  createUser(context, data) {
    return new Promise((resolve, reject) => {
      window.axios
        .post(`/users`, data)
        .then((response) => {
          context.commit("setUser", response.data);
          resolve(response);
        })
        .catch(reject);
    });
  },
  updateUser(context, data) {
    return new Promise((resolve, reject) => {
      window.axios
        .put("/users", data)
        .then((response) => {
          resolve(response);
        })
        .catch(reject);
    });
  },
  deleteUser(context, id) {
    return new Promise((resolve, reject) => {
      window.axios
        .delete(`/users/${id}`)
        .then((response) => {
          resolve(response);
        })
        .catch(reject);
    });
  },
};
