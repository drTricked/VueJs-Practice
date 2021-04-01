<template>
  <div>
    <Header />

    <div class="product-card">
      <img :src="product.img" alt="" />
      <h2>{{ product.name }}</h2>
      <span>Price: ${{ product.price }}</span>
      <h3>Product Description:</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        culpa nesciunt repellat iusto unde explicabo possimus fugiat modi nulla
        nisi, delectus corrupti incidunt dolorem maxime quibusdam? Aspernatur
        soluta animi aliquam?
      </p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import { getNotebookById } from "../assets/notebooks";

  export default {
    props: {
      id: {
        //this is passed as a string in the click event
        type: String,
        default: {},
      },
    },
    data() {
      return {
        product: {},
      };
    },
    components: {
      Header,
    },
    methods: {
      addToCart() {
        this.$store.dispatch("add", this.product);
      },
    },
    created() {
      // might be able to just do parseInt instead
      // need this because we pass it as a string instead of as a number
      this.product = getNotebookById(Number(this.id));
    },
  };
</script>

<style lang="scss" scoped>
  .product-card {
    border: solid 1px red;
    //     width: 100%;
    //     min-height: 60vh;
    //     height: 100%;

    //TODO: make this responsive
    width: 80%;
    margin-left: 40px;
    height: 800px;
  }
</style>
