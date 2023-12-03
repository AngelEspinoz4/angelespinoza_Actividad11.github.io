import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";

import inicio from "./components/inicio.vue";
import CountryDetails from "./components/CountryDetails.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: inicio,
  },
  {
    path: "/country/:cca3",
    name: "Country",
    component: CountryDetails,
  },
  /* {
    path: "/continent",
    name: "Continent",
    component: Continent,
  }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

createApp(App).use(router).mount("#app");
