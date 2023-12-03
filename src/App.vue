<script setup>
import axios from "axios";
import Country from "./components/Country.vue";
</script>

<template>
  <div class="container contenedor" style="min-height: 100vh">
    <div class="row">
      <div class="col-11 text-center">
        <router-link to="/">
          <img src="/logo.png" class="logo" alt="terraseach logo" />
          <span class="nombrePagina ms-1">TerraSearch</span>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
  <footer>
    <div class="container text-center">
      <p>Copyright &copy;2023 - Angel Espinoza</p>
      <p>
        API:
        <a href="https://restcountries.com/" target="_blank"
          >https://restcountries.com/</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      countries: [],
    };
  },
};
</script>

<style scoped>
.contenedor {
  padding: 0px 100px;
}
.logo {
  height: 10rem;
  will-change: filter;
  transition: filter 300ms;
}
footer {
  background-color: #787878;
  color: #fff;
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #9700dd8c);
  cursor: pointer;
}
.nombrePagina {
  font-size: 1.5rem;
  animation: cambioColor 5s infinite;
}
@keyframes cambioColor {
  0% {
    border-color: rgb(159, 87, 223);
    color: rgb(159, 87, 223);
  }
  10% {
    color: rgb(223, 163, 98);
  }
  20% {
    color: rgb(98, 163, 223);
  }
  30% {
    color: rgb(163, 223, 98);
  }
  40% {
    color: rgb(223, 98, 163);
  }
  50% {
    color: rgb(163, 163, 223);
  }
  60% {
    color: rgb(223, 163, 163);
  }
  70% {
    color: rgb(163, 223, 163);
  }
  80% {
    color: rgb(223, 163, 223);
  }
  90% {
    color: rgb(163, 223, 223);
  }
  100% {
    color: rgb(159, 87, 223);
  }
}
</style>
