import Vue from 'vue'
import Router from 'vue-router'

import store from './store/store'

import Home from './views/Home.vue'
import LogIn from './views/LogIn.vue'
import SignUp from './views/SignUp.vue'
import Account from './views/Account.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/log-in',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/log-in',
      name: 'LogIn',
      component: LogIn,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        authentication: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const logged = store.getters.userEmail
  const requiresAuth = to.matched.some(
    currentMatchedRoute => currentMatchedRoute.meta.authentication
  )
  if (requiresAuth && !logged) {
    alert(`You have to register in order to access ${to.matched[0].path}.`)
    next('*')
  } else {
    next()
  }
})

export default router
