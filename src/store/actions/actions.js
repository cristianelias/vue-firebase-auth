export default {
  addUser({ commit }, user) {
    commit('addUser', user)
  },

  removeUser({ commit }) {
    commit('removeUser')
  },
}
