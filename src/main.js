import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import {init} from "./api.js"

import "element-plus/dist/index.css";
import "./assets/scss/app.scss";

init();

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
