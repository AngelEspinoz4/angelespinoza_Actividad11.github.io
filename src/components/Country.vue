<template>
  <div @click="goToCountryDetails" class="card country-card">
    <img :src="country.flags?.svg" class="card-img-top country-image" />

    <div class="card-body">
      <h5 class="card-title">{{ country.name?.common }}</h5>

      <p class="card-text">
        Capital: {{ country.capital?.join(", ") || "N/A" }}
        <br />
        Population: {{ country.population || "N/A" }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
  methods: {
    goToCountryDetails() {
      this.$router.push(`/country/${this.country.cca3}`);
    },
  },
};
</script>

<style scoped>
.country-card {
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
}

.country-image {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
  color: #666;
}
</style>
