import Vue from 'vue'
import Vuex from 'vuex'
import profile from './modules/profile'
import characters from './modules/characters'
import user from './modules/user'
import character from './modules/character'
import systemCharacter from './modules/systemCharacter'

Vue.use(Vuex)

// const dev = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    profile,
    character,
    characters,
    user,
    systemCharacter
  }
})
