<template>
  <div>
    <Header />

    <div class="cards-container">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header";

  import Card from "../components/Card";
  export default {
    components: {
      Header,
      Card,
    },
  };
</script>

<style lang="scss" scoped>
  .cards-container {
    border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
