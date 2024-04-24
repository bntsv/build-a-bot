// eslint-disable-next-line import/no-extraneous-dependencies
import { createRouter } from "vue-router";
import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";

export default createRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/build",
      name: "Build",
      component: RobotBuilder,
    },
  ],
});
