import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import usePinia from "./stores";

import "normalize.css";
import "./assets/main.css";

const app = createApp(App);

app.use(usePinia);
app.use(router);

app.mount("#app");
