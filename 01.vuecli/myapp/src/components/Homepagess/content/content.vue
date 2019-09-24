<template>
  <div id="content">
    <div class="one1">
      <el-carousel trigger="click" height="640px" width="1920px">
        <el-carousel-item v-for="( item , index ) in src" :key="index">
          <el-image :src="item.url" fit="fill"></el-image>
        </el-carousel-item>
      </el-carousel>
      <!-- <div class="one2">

      </div>-->
    </div>
    <ul class="one2">
      <li>
        <i class="el-icon-location-information"></i>
        <input type="text" id="shuru" />
        <label for="shuru" class="one3">目的地/景点/关键词</label>
      </li>
      <li>
        <i class="el-icon-date"></i>
        <input type="text" id="shuru" value="2019-9-24至2019-9-25" />
        <span></span>
      </li>
      <li>
        <i class="el-icon-user"></i>
        <input type="text" id="shuru" value="不限" />
        <i class="el-icon-arrow-down"></i>
      </li>
      <li>
        <el-button type="primary" class="one4">搜索</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'contentes',
  data () {
    return {
      src: [
        {
          url:
            'https://pic.tujia.com/upload/config/home/day_190923/201909231129357931.jpg'
        },
        {
          url:
            'https://pic.tujia.com/upload/config/home/day_190924/201909241018169193.jpg'
        },
        {
          url:
            'https://pic.tujia.com/upload/config/home/day_190828/201908281023064736.jpg'
        },
        {
          url:
            'https://pic.tujia.com/upload/config/home/day_190924/201909241041451473.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "./content.css";
</style>
