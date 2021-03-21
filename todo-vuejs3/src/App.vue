<template>
  <h1>Vue 3 Todo App</h1>
  <form @submit.prevent="addNewTodo">
    <label for="newTodo">New Todo: </label>
    <input v-model="newTodo" type="text" name="newToddo" />
    <button>Add New Todo</button>
  </form>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
      <h3 @click="toggleDone(todo)" :class="{ done: todo.done }">
        {{ todo.content }}
      </h3>
      <button @click="removeTodo(index)">Remove Todo</button>
    </li>
  </ul>
</template>

<script>
  // can also use reactive to not use .value
  import { ref } from "vue";

  export default {
    setup() {
      // ref is an object with a single property value
      const newTodo = ref("");
      const todos = ref([]);

      function addNewTodo() {
        todos.value.push({
          id: Date.now(),
          done: false,
          content: newTodo.value,
        });
        newTodo.value = "";
      }

      function toggleDone(todo) {
        todo.done = !todo.done;
      }

      function removeTodo(index) {
        todos.value.splice(index, 1);
      }

      return {
        todos,
        newTodo,
        addNewTodo,
        toggleDone,
        removeTodo,
      };
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  form {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
  input {
    margin: 1%;
    width: 60vw;
  }
  form button {
    /* margin: 1%; */
    display: block;
    width: 60vw;
  }

  li {
    text-align: start;
  }

  .done {
    text-decoration: line-through;
  }
</style>
