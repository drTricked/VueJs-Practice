<template>
  <div id="navbar-container">
    <div id="navbar">
      <div>
        <h2 @click="$router.push('/shop')">Shop2</h2>
      </div>
      <div id="sidelinks">
        <ul>
          <li v-for="(item, index) in links" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: ["Login", "Signup", "Cart"],
      };
    },
  };
</script>

//
<style lang="scss" scoped>
  #navbar-container {
    // position: fixed;
    width: 100%;
    z-index: 9999;

    #navbar {
      display: flex;
      padding: 15px;
      justify-content: space-between;
      background-color: #979490;

      h2 {
        //    margin: 0 1rem 0 0;
        color: white;
        cursor: pointer;
      }
    }
    #sidelinks {
      color: white;
      text-decoration: none;
      border: solid 1px red;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: inline;
          margin-left: 10px;
          margin-right: 10px;
        }
        li:hover {
          // change this to a better colour
          color: green;
        }
      }
    }
  }
</style>
