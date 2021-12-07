// import characters from '../../api/characters'

const philipjfry = {
  id: '3d2b190a-a59d-4953-9c16-7efd3c04b1f3',
  order: 2,
  name: 'Philip J. Fry',
  image: '',
  icon: 'mdi-account-multiple',
  system: 'DD35',
  system_character_id: '5413fe68-9127-4c6d-9739-525d72cf7342'
}
const gandalf = {
  id: '17a50914-20f1-4cfc-8588-c151d9a35e1e',
  order: 1,
  name: 'Gandalf',
  image: '',
  icon: 'mdi-account-multiple',
  system: 'AvatarLegends',
  system_character_id: '45e4efc9-5e91-4560-9208-49a01a5ba010'
}
const frodo = {
  id: '1b8f4c42-ba34-4413-bb4b-66ae727455c6',
  order: 4,
  name: 'Frodo',
  image: '',
  icon: 'mdi-account-multiple',
  system: 'DD5',
  system_character_id: '99b23200-20c2-4abd-86e0-17c82e6fee7a'
}
const mandalorian = {
  id: 'ead7593a-4519-44f0-a873-2576de2d2ca1',
  order: 3,
  name: 'Mandalorian',
  image: '',
  icon: 'mdi-account-multiple',
  system: 'OD6',
  system_character_id: 'f3e43333-3e9b-471e-ba1a-3fe616c0ed7c'
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
