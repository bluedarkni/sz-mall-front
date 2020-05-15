<template>
  <div><h1>首页</h1>
  <h2>{{username}}</h2>
  </div>
</template>

<script>
  import {getUser} from '../utils/auth'
  export default {
    name: "home",
    data() {
      return {
        username: ''
      }
    },
    created() {
      let user = getUser()
      this.username = user.username
    }
  }
</script>

<style scoped>

</style>
