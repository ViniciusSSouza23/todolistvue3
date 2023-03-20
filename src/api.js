import axios from "axios";

window.axios = axios;


window.axios.defaults.baseURL = "https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1";
window.axios.defaults.timeout = 1000 * 60 * 5;

const TOKEN = "_ToDoApiToken";

const setAxiosHeader = (token) => {
  if (token) {
    window.axios.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    delete window.axios.defaults.headers.common.Authorization;
  }
};

const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
  setAxiosHeader(token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN);
  setAxiosHeader(null);
};

const getToken = () => {
  return localStorage.getItem(TOKEN);
};

const init = () => {
  const token = getToken();
  if (token) {
    setAxiosHeader(token);
  }
};

export { setToken, getToken, removeToken, init };
