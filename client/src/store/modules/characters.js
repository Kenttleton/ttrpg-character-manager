// import characters from '../../api/characters'

const philipjfry = {
  id: 2,
  name: 'Philip J. Fry',
  icon: 'mdi-account-multiple'
}
const gandalf = {
  id: 0,
  icon: 'mdi-account-multiple',
  name: 'Gandalf'
}
const frodo = {
  id: 1,
  icon: 'mdi-account-multiple',
  name: 'Frodo'
}
const mandalorian = {
  id: 3,
  icon: 'mdi-account-multiple',
  name: 'Mandalorian'
}

const state = () => ([
  philipjfry,
  gandalf,
  frodo,
  mandalorian
])

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
