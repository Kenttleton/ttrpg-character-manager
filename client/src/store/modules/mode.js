const state = () => ({
  edit: false
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  toggleEdit (state) {
    state.edit = !state.edit
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
