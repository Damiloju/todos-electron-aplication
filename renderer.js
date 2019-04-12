// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Vue = require('./node_modules/vue/dist/vue')

let vueApp = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to todos, add your todos below.',
    buttonText: 'Add Item',
    newTodo: "",
    buttonDisabled: false,
    counter: 0,
    todos: [
      {
        name: "Fuck them",
        completed:false
      },
      {
        name: "Guy them",
        completed:false
      }
    ]
  },
  methods: {
    addTodo() {
      this.buttonDisabled = true;
      if(this.newTodo === "" || this.newTodo == "undefined"){
        this.buttonDisabled = false;
        return;
      }
      this.todos.push({
        name: this.newTodo,
        completed: false
      });
      this.newTodo = '';
      this.buttonDisabled = false;
    }
  } // end of methods
})
