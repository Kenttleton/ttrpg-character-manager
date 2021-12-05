<template>
  <v-container>
    <div>Characters</div>
    <v-btn v-show="true" color="green" dark absolute right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-list>
     <v-list-item v-for="{id, icon, name} in characters" :key="id" link>
       <v-list-item-icon>
         <v-icon>{{ icon }}</v-icon>
       </v-list-item-icon>
       <v-list-item-content>
         <v-list-item-title>{{ name }}</v-list-item-title>
       </v-list-item-content>
     </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'Characters',
  computed: {
    characters () {
      return this.$store.state.characters
    }
  }
}
</script>

<style scoped>
</style>
