<template>
  <div id="app">
    <!-- 引入的组件导航栏 -->
    <navigationbar></navigationbar>
    <contentes></contentes>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import navigationbar from './navigationbar/navigationbar.vue'
import contentes from './content/content.vue'
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

</style>
