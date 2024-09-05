import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vPin from "./shared/pin-directive";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .directive("pin", vPin)
  .mount("#app");
