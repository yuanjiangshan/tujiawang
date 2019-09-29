import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
// 引入Element组件
import ElementUI from 'element-ui'

// 引入axios组件
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入登陆，注册页面
import login from '../components/Landing/Login/login.vue'
// 调用引入的element组件
import indexs from '../App.vue'
Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'indexs',
      component: indexs

    }
  ]
})
