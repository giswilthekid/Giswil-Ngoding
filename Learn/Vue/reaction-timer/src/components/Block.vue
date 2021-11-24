<template>
  <div class="block" v-if="show" @click="stopTimer">
    <p>Click me</p>
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      show: false,
      score: 0,
      timer: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.score += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit('end', this.score);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
