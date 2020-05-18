<template>
  <div><h1>首页</h1>
    <h2>username: {{username}}</h2>
    <h2>token: {{token}}</h2>
  </div>
</template>

<script>
  import Settings from '../settings'
  import Cookies from 'js-cookie'
  import {getToken, getUser} from '../utils/auth'

  export default {
    name: 'Home',
    data () {
      return {
        username: Cookies.get(Settings.userKey).username,
        token: Cookies.get(Settings.tokenKey)
      }
    },
    created () {
      alert(Cookies.get(Settings.userKey))
    }
  }
</script>

<style scoped>

</style>
