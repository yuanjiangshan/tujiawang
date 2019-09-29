<template>
  <div class="box" :style="{'background-image':`url(${backgrounds})`}">
    <div class="loginBox">
      <div class="navBox" @mouseenter="enter()" @mouseleave="leave()">
        <div class="leftBox">
          <div></div>
        </div>
        <a href="" :class="styles.class3">返回首页</a>
      </div>
      <div class="imgBox"></div>
      <LoginPage></LoginPage>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginPage from './loginPageModel.vue'
export default {
  components: {
    LoginPage
  },
  name: 'login',
  data: function () {
    return {
      backgrounds: null,
      items: [],
      styles: {
        class1: 'nav_a1',
        class2: 'nav_a2',
        class3: 'nav_a1'
      }
    }
  },
  methods: {
    enter () {
      this.styles.class3 = this.styles.class2
      console.log(this.backgrounds)
    },
    leave () {
      this.styles.class3 = this.styles.class1
    }
  },
  mounted () {
    let urlId = Math.floor(1 + Math.random() * 5)
    // 定义查找数据的id
    this.axios.post('http://192.168.3.100:5555/',
      {
        id: '1'
      }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        this.backgrounds = res.data[urlId].url
      }
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  @import './login.css';
</style>
