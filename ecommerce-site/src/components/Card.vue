<template>
  <div class="card-container">
    <img class="product-img" :src="img" alt="" />
    <h2 class="product-name">{{ name }}</h2>
    <span>Price: ${{ price }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: "",
      },
      img: {
        type: String,
        default: "",
      },
      price: {
        type: String,
        default: "",
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card-container {
    //     border: solid 1px red;
    width: 80%;
    //     margin: 0 10px;
    //     min-height: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    .product-img {
      max-width: 100%;
    }
  }
</style>
