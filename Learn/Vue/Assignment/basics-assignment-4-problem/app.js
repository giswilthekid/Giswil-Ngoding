const App = Vue.createApp({
  data() {
    return {
      classTemp: '',
      isUser1: false,
      isUser2: false,
      mode: false,
      color: '',
    };
  },
  watch: {
    classTemp() {
      if (this.classTemp == 'user1') {
        this.isUser1 = true;
      } else if (this.classTemp == 'user2') {
        this.isUser2 = true;
      } else {
        this.isUser1 = false;
        this.isUser2 = false;
      }
    },
  },
});

App.mount('#assignment');
