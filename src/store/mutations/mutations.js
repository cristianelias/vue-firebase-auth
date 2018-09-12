export default {
  addUser(state, user) {
    state.user = user
  },

  removeUser(state) {
    state.user = null
  },
}
