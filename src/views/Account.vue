<template>
  <div>
    <h1>{{ welcomeMessage }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {
      email: this.$store.state.user.email,
    }
  },
  computed: {
    welcomeMessage() {
      return `Welcome to your account, ${this.email}`
    },
  },
}
</script>
