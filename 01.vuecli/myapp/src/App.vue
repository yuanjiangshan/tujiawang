<template>
  <div id="app">
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
  margin: 0px;
  padding: 0px;
}

</style>
