import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shop.vue"),
  },
  {
    path: "/productInfo/:id",
    name: "productInfo",
    //lazy import
    component: () => import("../views/ProductInfo.vue"),
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    //lazy import
    component: () => import("../views/Cart.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
