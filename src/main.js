import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import Artists from "./components/Artists";
import Detail from "./components/Detail";
import Contact from "./components/Contact";
import Booknow from "./components/Booknow";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/artists", component: Artists },
  { path: "/detail/:id", component: Detail },
  { path: "/booknow", component: Booknow },
  { path: "/contact", component: Contact }
  // { path: '/bar', component: Bar }
];
const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
