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
    <div class="bottonBox">
      <a href="" class="buttonNav">关于我们</a>|
      <a href="" class="buttonNav">我是房客</a>|
      <a href="" class="buttonNav">加入途家</a>|
      <a href="" class="buttonNav">网站地图</a>
    </div>
    <div class="chopBox">
      <p class="chopTitle">© Copyright 2019 tujia.com 途家版权所有 <a href="" class="chopTitle_a">津ICP备17006480号</a></p>
      <p class="chop">
        <a href="" v-for="item in items" :key="item.indexs_id"><img :src="item.url" alt="" class="chop_img"></a>
      </p>
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
    },
    leave () {
      this.styles.class3 = this.styles.class1
    }
  },
  mounted () {
    let urlId = Math.floor(Math.random() * 5)
    console.log(urlId)
    // 定义查找数据的id
    this.axios.post('http://192.168.3.100:5555/',
      {
        id: '1'
      }).then((res) => {
      // console.log(res)
      if (res.status === 200) {
        this.backgrounds = res.data.background[urlId].url
      }
    }).catch(function (err) {
      console.log(err)
    })
    this.axios.post('http://192.168.3.100:5555/',
      {
        id: '2'
      }).then((res) => {
      // console.log(res)
      if (res.status === 200) {
        this.items = res.data.background
      }
      console.log(this.items)
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  @import './login.css';
</style>
