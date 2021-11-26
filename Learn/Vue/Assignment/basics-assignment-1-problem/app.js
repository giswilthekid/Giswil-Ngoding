const App = {
  data() {
    return {
      name: 'Giswil',
      age: 22,
      imageLink: 'img1.jpg',
    };
  },
  methods: {
    incAge() {
      console.log(this.age);
      return this.age + 5;
    },
    randomNum() {
      return Math.random();
    },
  },
};

Vue.createApp(App).mount('#assignment');
