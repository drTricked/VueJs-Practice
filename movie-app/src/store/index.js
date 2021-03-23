import { createStore } from "vuex";
import movies from "./modules/movies";

// global values

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
  },
});

//example of using with a user state
// const SET_USER = "SET_USER";
// export default createStore({
//   state: {
//     user: {},
//   },
//   //mutates state
//   mutations: {
//     // takes state, user
//     [SET_USER](state, user) {
//       state.user = user;
//     },
//   },
//   // can hold async and sync methods
//   actions: {
//     setUser({ commit }, user) {
//       //call API
//       commit(SET_USER, user);
//     },
//   },
//   modules: {},
//   // reactive updates
//   getters: {
//     isUserAdmin: (state) => {
//       return state.user.role === "admin";
//     },
//   },
// });
