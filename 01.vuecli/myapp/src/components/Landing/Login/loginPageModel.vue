<template>
<div>
    <button v-on:click='href'>跳转界面</button>
    <router-view></router-view>
</div>
</template>
<script>

export default {
  name: 'loginPageModel',
  methods: {
    href () {
      this.$router.push('./login')
    }
  }
}
</script>
<style scoped>
    .box{
        width: 300px;
        height: 300px;
        background-color: green;
        font-size:30px;
        color: white;
        text-align: center;
        line-height: 300px
    }
</style>
