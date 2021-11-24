<template>
  <h1>Reaction Timer</h1>
  <button @click="play" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" :delay="delay" @end="stop" />
  <Result v-if="showResult" :score="score" />
</template>

<script>
import Block from './components/Block';
import Result from './components/Result';

export default {
  name: 'App',
  components: { Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    };
  },
  methods: {
    play() {
      this.isPlaying = true;
      this.showResult = false;
      this.delay = 2000 + Math.random() * 5000;
      console.log(this.delay);
    },
    stop(score) {
      this.isPlaying = false;
      this.score = score;
      this.showResult = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
