import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home', //匹配规则
      component: home //路由对应的模板对象
    }
  ]
})
