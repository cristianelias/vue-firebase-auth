<template>
  <div>
    <h1>Log in form</h1>
    <form @submit.prevent="logIn">
      <input v-model="user" type="email">
      <input v-model="pass" type="password">
      <button type="submit">Log in</button>
    </form>
  </div>

</template>

<script>
import fb from '../configs/firebase'

export default {
  name: 'login',
  data() {
    return {
      user: '',
      pass: '',
    }
  },
  methods: {
    logIn() {
      fb.auth()
        .signInWithEmailAndPassword(this.user, this.pass)
        .then(undefined, error => {
          alert(
            `An error has ocurred while trying to log you in.
            Code: ${error.code}
            Message: ${error.message}`
          )
        })
    },
  },
}
</script>
