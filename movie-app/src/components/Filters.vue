<template>
  <div id="filters">
    <h3>Filters</h3>
    <p
      v-for="(filter, index) in filters"
      :class="{ select: filter.selected }"
      :key="index"
      @click="applyFilter(filter)"
    >
      {{ filter.name }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filters: [
          {
            name: "Rating highest",
            key: "rating",
            order: "desc",
            selected: true,
          },
          {
            name: "Rating lowest",
            key: "rating",
            order: "asc",
            selected: false,
          },
          {
            name: "Year newest",
            key: "year",
            order: "desc",
            selected: false,
          },
          {
            name: "Year oldest",
            key: "year",
            order: "asc",
            selected: false,
          },
        ],
      };
    },
    methods: {
      applyFilter(filter) {
        this.$store.dispatch("filter", filter);

        // this is not very good since it is O(n)
        // there probably is a solution for O(1)
        this.filters.map((fl) => (fl.selected = false));
        filter.selected = true;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .select {
    color: green;
  }
  #filters {
    text-align: left;
    color: rgb(143, 143, 143);
    cursor: pointer;

    p {
      margin-left: 10px;
    }
  }
</style>
