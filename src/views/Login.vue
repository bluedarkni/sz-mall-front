<template>
  <div class="login">
      <div><input type="text" v-model="username" placeholder="用户名"></div>
      <div><input type="password" v-model="password" placeholder="密码"></div>
      <div><input v-model="captcha" placeholder="验证码">
        <img v-bind:src="captchaImage" @click="getCaptcha">
      </div>
      <button v-on:click="handleLogin">登陆</button>
  </div>
<!--  <div>-->
<!--    <a v-bind:href="">{{ caseNumber }}</a>-->
<!--  </div>-->
</template>

<script>
import { encrypt } from '../utils/rsaEncrypt'
// import Axios from 'axios'
// import Axios from 'axios'
import Request from '../utils/request'
import Settings from '../settings'
import {getToken, setToken, setUser} from '../utils/auth'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      captcha: '',
      captchaId: '',
      captchaImage: ''
    }
  },
  created() {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      Request
        .get('/auth/captcha')
        .then((response)=> {
          this.captchaId = response.data.captchaId
          this.captchaImage = response.data.image
        })
        .catch((error)=> {
          console.log(error);
        })
    },
    handleLogin () {
      let pwdKey = encrypt(this.password)
      Request
        .post('/auth/login', {
        username: this.username,
        password: pwdKey,
        code: this.captcha,
        captchaId: this.captchaId
        })
        .then((response)=> {
          setToken(response.data.token)
          setUser(response.data.user)
          this.$router.push('/home')
        })
        .catch((error)=> {
          alert(error)
          console.log(error)
        })
    }
  }
}
</script>

<style>
  .login {
    /*display: flex;*/
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image:url("../assets/logo.png");
    background-size: cover;
  }

</style>
