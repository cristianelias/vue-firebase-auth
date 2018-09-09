<template>
  <div>
    <h1>{{ welcomeMessage }}</h1>
  </div>
</template>

<script>
import fb from '../configs/firebase'
import _ from 'lodash'

export default {
  name: 'Account',
  data() {
    return {
      email: _.get(fb.auth(), 'currentUser.email', ''),
    }
  },
  computed: {
    welcomeMessage() {
      return `Welcome to your account, ${this.email}`
    },
  },
}
</script>
