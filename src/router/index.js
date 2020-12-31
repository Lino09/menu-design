import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/Menu.vue";

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
  
  path: "/category/:id",
  name: "InsideCategory",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  props: true,
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Submenu.vue")
},
{

path: "/category/dish/:id",
name: "Dish",
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
props: true,
component: () =>
  import(/* webpackChunkName: "about" */ "../views/Dish.vue")
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
