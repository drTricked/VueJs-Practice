<template>
  <div class="card-container">
    <img
      class="product-img"
      src="https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg"
      alt=""
    />
    <h2 class="product-name">Notebook:</h2>
    <span>Price: $2.00</span>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .card-container {
    border: solid 1px red;
    width: 25%;
    min-height: 100%;
    //     max-height: 60vh;

    .product-img {
      max-width: 100%;
    }
  }
</style>
