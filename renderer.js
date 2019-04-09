// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Vue = require('./node_modules/vue/dist/vue')

let vueApp = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to todos, add your todos below.',
    buttonText: 'Add Item',
    counter: 0,
    todos: [
      {
        name: 'Wash Plate',
        completed:false
      },
      {
        name: 'Sing For Brain',
        completed:false
      }
    ]
  },
  methods: {
    button: function () {
      this.buttonText = `Been clicked ${++this.counter} times`
    }
  } // end of methods
})
