const App = Vue.createApp({
  data() {
    return {
      tasks: [],
      tempTask: '',
      showList: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.tempTask);
      this.tempTask = '';
    },
  },
});

App.mount('#assignment');
