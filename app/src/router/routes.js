import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue"),
    },

    {
        path: "/storm",
        name: "Strom",
        component: () =>
            import ("../views/Storm.vue"),
    },
    {
        path: "/fivedays",
        name: "FiveDays",
        component: () =>
            import ("../views/FiveDays.vue"),
    },
    {
        path: "/detailed",
        name: "Detailed",
        component: () =>
            import ("../views/Detailed.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;