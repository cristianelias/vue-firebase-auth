import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fb from './configs/firebase'

Vue.config.productionTip = false

let app

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }

  if (fb.auth().currentUser) {
    router.push({
      path: '/account',
    })
  } else {
    router.push({
      path: '/',
    })
  }
})
