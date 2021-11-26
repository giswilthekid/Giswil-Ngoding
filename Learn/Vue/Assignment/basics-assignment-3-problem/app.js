const App = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    addNum(num) {
      this.result += num;
    },
  },
  computed: {
    resultComputed() {
      if (this.result < 37) {
        return 'Not there yet';
      } else if (this.result > 37) {
        return 'Too much!';
      } else {
        return this.result;
      }
    },
  },
  watch: {
    resultComputed() {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
});

App.mount('#assignment');
