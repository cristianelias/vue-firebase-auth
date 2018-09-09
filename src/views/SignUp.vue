<template>
    <div>
      <h1>Registration form</h1>

      <form @submit.prevent="signUp">
        <input v-model="user" type="email">
        <input v-model="pass" type="password">
        <button type="submit">Sign up</button>
      </form>
  </div>
</template>

<script>
import fb from '../configs/firebase'

export default {
  name: 'SignUp',
  data() {
    return {
      user: '',
      pass: '',
    }
  },
  methods: {
    signUp() {
      fb.auth()
        .createUserWithEmailAndPassword(this.user, this.pass)
        .catch(error => {
          alert(
            `An error has ocurred while trying to sign you up.
              Code: ${error.code}
              Message: ${error.message}`
          )
        })
    },
  },
}
</script>
