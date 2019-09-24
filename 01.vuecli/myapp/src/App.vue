<template>
  <div id="app">
    <!-- 引入的组件导航栏 -->
    <navigationbar></navigationbar>
    <contentes></contentes>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import navigationbar from './components/Homepagess/navigationbar/navigationbar.vue'
import contentes from './components/Homepagess/content/content.vue'
export default {
  name: 'App',
  components: {
    navigationbar,
    contentes
  },
  mounted () {
    this.$router.push('/login')
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}

</style>
