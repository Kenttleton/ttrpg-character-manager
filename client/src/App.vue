<template>
    <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
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
        <div>{{profile.first_name}} {{profile.last_name}}</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-container>
        <div class="characters-header">Characters</div>
        <v-divider></v-divider>
        <div class="characters-buttons">
          <v-btn icon>
            <v-icon>mdi-sort</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
        <v-divider :class="{ 'list-mini': mini}"></v-divider>
        <v-list>
         <v-list-item v-for="{id, icon, name} in characters" :key="id" link :class="{ 'list-item-mini': mini}">
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ name }}</v-list-item-title>
            </v-list-item-content>
         </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <vue-splash v-if="loading" :show="true" :logo="logo" title="Character Manager" color="#00bfa5" :size="300" :fixed="true"/>
        <Character/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VueLogo from './assets/logo.png'
import Character from './components/Character.vue'

export default {
  name: 'CharacterManager',
  computed: {
    logo () {
      return VueLogo
    },
    characters () {
      // eslint-disable-next-line
      return this.$store.state.characters.sort((a, b) => {
        if (a.order < b.order) return -1
        if (a.order > b.order) return 1
        return 0
      })
    },
    profile () {
      return this.$store.state.profile
    }
  },
  data: () => ({
    loading: false,
    drawer: true
  }),
  components: {
    Character
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
.characters-header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
.characters-buttons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
