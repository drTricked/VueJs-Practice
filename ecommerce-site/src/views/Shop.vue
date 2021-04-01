<template>
  <div>
    <Header />

    <h1 id="product-header">Products</h1>
    <div class="cards-container">
      <Card
        v-for="product in products"
        @click="moreInfo(product.id)"
        :key="product.id"
        :name="product.name"
        :img="product.img"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Card from "../components/Card";

  import products from "../assets/notebooks";

  export default {
    data() {
      return {
        //    products: [],
      };
    },
    components: {
      Header,
      Card,
    },
    methods: {
      moreInfo(id) {
        this.$router.push({
          name: "productInfo",
          params: { id: id },
        });
      },
    },
    created() {
      this.products = products;
    },
  };
</script>

<style lang="scss" scoped>
  #product-header {
    margin: 50px;
  }
  .cards-container {
    //     border: 1px solid red;
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    //     column-gap: 80px;
    row-gap: 20px;
  }
</style>
