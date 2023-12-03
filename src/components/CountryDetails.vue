<template>
  <h3 class="text-center mt-3 fw-bold fs-1">Country Details</h3>
  <div class="container">
    <div v-if="country" class="text-center">
      <div class="row m-3">
        <div class="col-md-7">
          <h1 class="">{{ country[0].name.common }}</h1>
          <img :src="country[0].flags.svg" class="country-image mb-5" />
        </div>
        <div class="text-start col-md-4 ms-5 datos">
          <h4><span>Official Name: </span>{{ country[0].name.official }}</h4>
          <h4><span>Population: </span>{{ country[0].population }}</h4>
          <h4><span>Region: </span> {{ country[0].region }}</h4>
          <h4>
            <span>Capital:</span> {{ country.capital?.join(", ") || "N/A" }}
          </h4>
          <h4 v-if="country[0].currencies">
            <h4>
              <span>Timezones</span> {{ country[0].timezones.join(", ") }}
            </h4>
            <h4>
              <span>Capital Info: </span>
              {{ country[0].capitalInfo.latlng?.join(", ") || "N/A" }}
            </h4>
            <a
              :href="country[0].maps.googleMaps"
              target="_blank"
              class="fw-bold"
              >Ver en Google Maps</a
            >
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      country: null,
    };
  },
  mounted() {
    axios
      .get(`https://restcountries.com/v3.1/alpha/` + this.$route.params.cca3)
      .then((res) => {
        this.country = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.instrucciones {
  text-align: justify;
}
.country-image {
  width: 40rem;
}
.datos {
  margin-top: 60px;
}
span {
  font-weight: bold;
}
</style>
