<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 引入的组件导航栏 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$router.push('/')
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}

</style>
