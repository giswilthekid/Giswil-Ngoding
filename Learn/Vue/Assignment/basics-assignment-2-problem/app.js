const App = {
  data() {
    return {
      user: '',
    };
  },
  methods: {
    alertHandler() {
      alert('Event practice');
    },
    addUser(e) {
      this.user = e.target.value;
    },
  },
};

Vue.createApp(App).mount('#assignment');
