<template>
    <v-app id="inspire">
      <vue-splash
        :show="true"
        :logo="logo"
        title="Character Manager"
        color="#00bfa5"
        :size="300"
        :fixed="true"
      />
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in characters"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import testlogo from './assets/logo.png'
export default {
  name: 'Character Manager',
  computed: {
    logo () {
      return testlogo
    }
  },
  data: () => ({
    drawer: true,
    characters: [
      ['mdi-account-multiple', 'Gandalf'],
      ['mdi-account-multiple', 'Frodo'],
      ['mdi-account-multiple', 'Philip J. Fry'],
      ['mdi-account-multiple', 'Mandolorian']
    ]
  })
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
