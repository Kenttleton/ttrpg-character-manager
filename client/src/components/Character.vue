<template>
  <v-container>
    <h1>{{name}}</h1>
  </v-container>
</template>

<script>
export default {
  name: 'Character',
  computed: {
    name () { return this.$store.state.character.name }
  }
}
</script>

<style scoped>
</style>
