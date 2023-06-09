import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/registro",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/gerenciador-de-tarefas",
    name: "taskManager",
    component: () => import("../views/TaskManager.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
