<template>
  <div class="cardContainer">
    <car-card class="mx-3 my-2" v-for="i in 12" :key="i" :item="item" />
  </div>
</template>

<script>
  import CarCard from "../components/CarCard.vue";
  export default {
    components: {
      CarCard,
    },
    data() {
      return {
        item: [
          "Jeep Renegade",
          "About Car About Car About Car About Car About Car About Car About Car",
          200,
        ],
      };
    },
  };
</script>

<style>
  .cardContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
