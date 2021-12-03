<template>
  <div>
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>