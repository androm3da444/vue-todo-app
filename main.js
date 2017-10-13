var taskApp = new Vue({
  el: '#taskApp',
  data: {
    tasks: [
      {name: 'Finish this task', done: false},
      {name: 'Jiggle the beats', done: false},
      {name: 'Dance to the music', done: false},
    ]
  },
  methods: {
    addTask: function(e){
      e.preventDefault();
      this.tasks.push({
        name: this.tasks.name,
        done: false
      })
    },
    deleteTask: function(task){
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
})
