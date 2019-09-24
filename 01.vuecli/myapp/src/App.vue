<template>
  <div id="app">
    <!-- 引入的组件导航栏 -->
    <navigationbar></navigationbar>
    <contentes></contentes>
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
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: red
}
</style>
