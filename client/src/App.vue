<template>
    <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <ProfileSmall/>
      <v-divider></v-divider>
      <Characters/>
    </v-navigation-drawer>
    <v-main>
      <v-container class="" fluid>
        <vue-splash v-if="loading" :show="true" :logo="logo" title="Character Manager" color="#00bfa5" :size="300" :fixed="true"/>
        <Character/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VueLogo from './assets/logo.png'
import ProfileSmall from './components/ProfileSmall.vue'
import Characters from './components/Characters.vue'
import Character from './components/Character.vue'

export default {
  name: 'CharacterManager',
  computed: {
    logo () {
      return VueLogo
    }
  },
  data: () => ({
    loading: false,
    drawer: true
  }),
  components: {
    ProfileSmall,
    Character,
    Characters
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
