import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";

import App from "./App.vue";
import Description from "./Description.vue";
import Experience from "./Experience.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const NotFound = {
  template: "<p>The page you're looking for does not exist :<</p>"
};

const routes = [
  { path: "/", component: Description },
  { path: "/experience", component: Experience },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
