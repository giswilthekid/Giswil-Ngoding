<template>
  <div v-if="job">
    <h1>Job Details</h1>
    <p>The job id is {{ id }}</p>
  </div>
  <div v-else>
    <p>Loading data...</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
