<template>
  <div class="row text-center">
    <div class="col-12 mb-5">
      <input
        type="text"
        class="busqueda"
        placeholder="Buscar receta"
        v-model="search"
        @keyup.enter="searchData"
      />
    </div>
    <div class="col-12">
      <div class="row">
        <div
          class="col-4 mb-3"
          v-for="country in paginated"
          :key="country.cca3"
        >
          <Country :country="country"></Country>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center fw-bold mb-3">Actual: {{ pagina }}</div>
  <div class="text-center mb-3">
    <a @click="prev" class="click me-5">Anterior</a>
    <a @click="next" class="click">Siguiente</a>
  </div>
</template>

<script>
import CountryDetails from "./CountryDetails.vue";
import Country from "./Country.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      countries: [],
      pagina: 1,
      pageSize: 12,
      search: "",
    };
  },
  components: {
    Country,
  },
  mounted() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      this.countries = res.data;
    });
  },
  methods: {
    next() {
      if (this.indexEnd < this.countries.length) {
        this.pagina++;
      }
    },
    prev() {
      if (this.pagina > 1) {
        this.pagina--;
      }
    },
    searchData() {
      if (this.search) {
        this.pagina = 1;
        axios
          .get("https://restcountries.com/v3.1/name/" + this.search)
          .then((res) => {
            this.countries = res.data;
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Vaya...",
          text: "Ingrese un pais porfavor >:(",
        });
      }
    },
  },

  computed: {
    indexStart() {
      return (this.pagina - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.countries.slice(this.indexStart, this.indexEnd);
    },
  },
};
</script>
