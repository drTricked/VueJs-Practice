<template>
  <Header />
  <div class="checkout">
    <!-- note you can't use product id since you can 
         have multiple copies of the same product
     -->
    <div v-for="(product, index) in cart" :key="index" class="checkout-card">
      <img :src="product.img" alt="" />
      <h2>
        {{ product.name }}
      </h2>
      <h4>${{ product.price }}</h4>
      <button @click="removeFromCart(index)">X</button>
    </div>
    <h3>Total: {{ totalPrice }}</h3>
  </div>
</template>

<script>
  import Header from "../components/Header";
  export default {
    data() {
      return {
        cart: [],
        //    totalPrice: 0,
      };
    },
    components: {
      Header,
    },
    methods: {
      removeFromCart(index) {
        this.$store.dispatch("remove", index);
      },
    },
    computed: {
      totalPrice() {
        let formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",

          // These options are needed to round to whole numbers if that's what you want.
          //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
          //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        let tp = 0;
        if (this.cart.length !== 0) {
          tp = this.cart.reduce((a, b) => ({
            price: Number(a.price) + Number(b.price),
          }));
          tp = tp.price;
          tp = formatter.format(tp);
        }
        return tp;
      },
    },
    created() {
      this.cart = this.$store.getters.getCart;
    },
  };
</script>

<style lang="scss" scoped>
  .checkout {
    width: 100%;
    border: solid 1px red;
    //     display: grid;
    //     align-items: center;
  }
  .checkout-card {
    border: solid 1px black;
    //     width: 80%;
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 0.5fr;
  }
</style>
