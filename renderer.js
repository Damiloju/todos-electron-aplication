// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Vue = require('./node_modules/vue/dist/vue')

let vueApp = new Vue({
  el: '#app',
  mounted() {
    console.log('App mounted!');
    if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
  },
  data: {
    message: 'Welcome to todos, add your todos below.',
    buttonText: 'Add Item',
    newTodo: "",
    buttonDisabled: false,
    counter: 0,
    todos: []
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
        completed: false,
        id: new Date()
      });
      this.newTodo = '';
      this.buttonDisabled = false;
    },
    deleteTodo(id){
      console.log("deleting");
      let index = this.todos.findIndex(item => {
        return item.id === id;
      })
      this.todos.splice(index,1);
    }
  }, // end of methods
  watch: {
    todos: {
      handler() {
        console.log('Todos changed!');
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
})
