<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>

  <div class="options">
    <button @click="toggleModalOne">Open Modal 1</button>
    <button @click="toggleModalTwo">Open Modal 2</button>
  </div>

  <teleport to="#modal" v-if="showModalOne">
    <Modal theme="" @close="toggleModalOne">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </teleport>

  <teleport to="#modal" v-else-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo">
      <h1>New Letter</h1>
      <p>Sign up for news letter!</p>
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import Modal from './components/Modal';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App!',
      header: 'Vue Give Away',
      text: 'Grab your vue for half price!',
      showModalOne: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModalOne() {
      this.showModalOne = !this.showModalOne;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app,
#modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
p {
  margin: 10px 0px 10px 0px;
}
.options {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
