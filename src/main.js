import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import fb from './configs/firebase'

Vue.config.productionTip = false

fb.auth().onAuthStateChanged(user => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')

  if (user) {
    store.dispatch('addUser', user)

    router.push({
      path: '/account',
    })
  } else {
    store.dispatch('removeUser')

    router.push({
      path: '/',
    })
  }
})
