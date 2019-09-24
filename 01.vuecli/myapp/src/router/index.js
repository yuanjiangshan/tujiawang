import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import navigationbar from '../components/Homepagess/navigationbar/navigationbar.vue'
// import NavigationBar from '@/components/Homepage/NavigationBar/NavigationBar'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    // , {
    //   path: '/text',
    //   name: 'NavigationBar',
    //   component: NavigationBar
    // }

  ]
})
