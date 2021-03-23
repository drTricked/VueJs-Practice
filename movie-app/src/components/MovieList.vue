<template>
  <div id="movie-container">
    Movie List
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
  import Movie from "./Movie";

  export default {
    data() {
      return {
        // movies: [],
      };
    },
    components: {
      Movie,
    },
    // similar to methods: {} except holds cached data
    // will not recall if dependency does not change
    computed: {
      movies: {
        get() {
          return this.$store.getters.getMovies;
        },
      },
    },
    // alternative
    // for some reason this way is giving me internal vue bug?
    created() {
      this.$store.dispatch("fetchMovies");
    },
  };
</script>

<style lang="scss" scoped>
  #movie-container {
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    justify-content: center;
  }
</style>
