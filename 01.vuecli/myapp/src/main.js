// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import Party from './components/Party.vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
