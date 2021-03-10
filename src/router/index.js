import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Product from "@/components/Product";
import Service from "@/components/Service";

Vue.use(Router);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/product", name: "Product", component: Product },
  { path: "/service", name: "Service", component: Service }
];

export default new Router({
  routes,
  mode: "history"
});
