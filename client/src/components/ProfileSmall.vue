<template>
  <v-sheet color="grey lighten-4" class="pa-4">
  <div v-if="profile.image !== ''">
    <v-avatar class="mb-4" color="indigo" size="64">
      <img :src="profile.image"/>
    </v-avatar>
  </div>
  <div v-else>
    <v-avatar class="mb-4" color="indigo" size="64">
      <v-icon dark large>{{profile.icon}}</v-icon>
    </v-avatar>
  </div>
  <div>{{profile.name}}</div>
  </v-sheet>
</template>

<script>
export default {
  name: 'ProfileSmall',
  computed: {
    profile () {
      return this.$store.state.profile
    }
  },
  data: () => ({})
}
</script>

<style>
</style>
