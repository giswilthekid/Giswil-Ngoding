<template>
  <h1>Page Not Found</h1>
  <button @click="redirect">Go Back Home</button>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style></style>
