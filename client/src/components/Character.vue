<template>
  <v-container fluid>
    <h1>{{character.name}}</h1>
    <DD35 v-if="character.system === 'DD35'"/>
    <AvatarLegends v-if="character.system === 'AvatarLegends'"/>
  </v-container>
</template>

<script>
import DD35 from './system/DungeonsDragons35.vue'
import AvatarLegends from './system/AvatarLegends.vue'
export default {
  name: 'Character',
  computed: {
    character () { return this.$store.state.character }
  },
  components: {
    DD35,
    AvatarLegends
  }
}
</script>

<style scoped>
</style>
