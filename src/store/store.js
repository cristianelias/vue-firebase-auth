import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/actions'
import mutations from './mutations/mutations'

import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    userEmail: state => _.get(state, 'user.email', null),
  },
  mutations,
  actions,
})
