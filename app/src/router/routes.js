import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/hello-world",
    name: "HelloWorld",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/storm",
    name: "Strom",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Storm.vue"),
  },
  {
    path: "/fivedays",
    name: "FiveDays",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FiveDays.vue"),
  },
  {
    path: "/detailed",
    name: "Detailed",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detailed.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
