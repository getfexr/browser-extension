import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/contacts.vue"),
  },
  {
    path: "/connect",
    name: "Connect",
    component: () => import("../views/connectToSky.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
