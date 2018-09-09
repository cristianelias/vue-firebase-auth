<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |

      <a href="#" 
         v-if="hasUserLoggedIn"
         class="router-link-active"
         @click="logOut">
        Log out
      </a>
      <span v-else>
        <router-link to="/log-in">Log in</router-link> 
        <span>or</span>
        <router-link to="/sign-up">Sign up</router-link>
      </span> |

      <router-link to="/account">Account</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
import fb from './configs/firebase'

export default {
  name: 'App',
  methods: {
    logOut() {
      fb.auth()
        .signOut()
        .catch(error => {
          alert(
            `An error has ocurred while trying to log you out.
              Code: ${error.code}
              Message: ${error.message}`
          )
        })
    },
  },
  computed: {
    hasUserLoggedIn() {
      return fb.auth().currentUser
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a + a {
  margin-left: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
