import Vue from "vue";
import VueRouter from "vue-router";
import MainContent from "../components/MainContent.vue";
import Cars from "../views/Cars.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainContent,
  },
  {
    path: "/rent",
    name: "Rent",
    component: Cars,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
