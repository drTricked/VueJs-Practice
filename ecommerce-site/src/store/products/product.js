// store data or state
const state = {
  products: [],
  // we may not need this?
  product: {},
  cart: [],
};

// change states
const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  addToCart(state, product) {
    state.cart.push(product);
  },
  removeFromCart(state, index) {
    state.cart.splice(index, 1);
  },
};

// create our functions
const actions = {
  // getProductDetail({ commit }, payload) {},
  add({ commit }, product) {
    commit("addToCart", product);
  },
  remove({ commit }, index) {
    commit("removeFromCart", index);
  },
};

// to retrieve data
const getters = {
  getProducts: (state) => {
    return state.products;
  },
  getProductByID: (state) => (id) => {
    return state.products.find((product) => product.id === id);
  },
  getCart: (state) => {
    return state.cart;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
