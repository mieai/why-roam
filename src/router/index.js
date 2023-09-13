import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/favor",
      name: "favor",
      // route level code-splitting
      // this generates a separate chunk (FavorPage.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/favor/FavorPage.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/order/OrderPage.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../views/message/MessagePage.vue"),
    },
    {
      path: "/city",
      name: "city",
      component: () => import("../views/city/CityPage.vue"),
      meta: {
        hideTabbar: true,
      },
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/search/SearchPage.vue"),
      mata: {
        hideTabbar: true,
      },
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/detail/HomeDetailPage.vue"),
      mata: {
        hideTabbar: true,
      },
    },
  ],
});

export default router;
