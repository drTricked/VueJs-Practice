const app = Vue.createApp({
  data() {
    return {
      title: "Simple Todo App",
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      // push the new todo to the array
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      // clear the todo input
      this.newTodo = "";
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      //  recall this takes the index to start at and starts removing i elements from that point
      this.todos.splice(todoIndex, 1);
    },
    markAllDone() {
      this.todos.forEach((todo) => {
        todo.done = true;
      });
    },
  },
});

app.mount("#app");
