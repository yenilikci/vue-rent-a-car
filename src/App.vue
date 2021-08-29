<template>
  <div id="app">
    <Navbar />
    <MainContent />
  </div>
</template>

<script>
  import globalComponent from "./components/globalComponent";
  export default {
    components: {
      ...globalComponent,
    },
  };
</script>

<style></style>
