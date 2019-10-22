import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import Artists from "./components/Artists";
import Detail from "./components/Detail";
import Contact from "./components/Contact";
// import Booknow from "./components/Booknows";
import Vuex from 'vuex'
import {store} from './vuex/store';
Vue.use(Vuex)

import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/artists", component: Artists },
  { path: "/artist/:id", component: Detail },
  // { path: "/booknow", component: Booknow },
  { path: "/contact", component: Contact }
  // { path: '/bar', component: Bar }
];
const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes // short for `routes: routes`
});
new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount("#app");
