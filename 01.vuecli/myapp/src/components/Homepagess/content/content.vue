<template>
  <div id="content">
    <div class="one9">
      <div class="one1">
        <el-carousel indicator-position="outside" height="640px">
          <el-carousel-item v-for='(item,index) in lunbo_object' :key='index'>
            <el-image :src='item.home_url' class="one10"></el-image>
          </el-carousel-item>
        </el-carousel>
        <ul class="one2">
          <li>
            <i class="el-icon-location-information"></i>
            <el-input v-model="input" placeholder="目的地/景点/关键词"></el-input>
          </li>
          <li>
            <i class="el-icon-date"></i>
            <el-date-picker
              v-model="value"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </li>
          <li>
            <i class="el-icon-user"></i>
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <el-button type="primary" class="one4" @click="getvalue">搜索</el-button>
          </li>
        </ul>
      </div>
      </div>
      <!-- 住宿特卖 -->
      <div class="two1">
        <h3 class="two2">周四特卖</h3>
        <div class="two4">
          <ul class="two3">
            <li v-for='(item,index) in ul1' :key="index" @click="fun1(item.ul1_id,item.diqu_true)" :class="item.diqu_true?style.diqu1:style.diqu2">
              <el-link :underline="false" :class="item.diqu_true?style.diqu1:style.diqu2">{{item.li1}}</el-link>
            </li>
          </ul>
          <div class="two5">
            <div class="two5_1" v-for='(item1,index) in src' :key='index'>
              <a href="#" class="two5_img">
                <img :src='item1.url' width="100%">
              </a>
              <div class="two5_dizhi">
                <h4 class="two5_dizhi_1">
                    <a href="">
                      {{item1.dizhi}}
                    </a>
                </h4>
                <span href="#">
                  <i>￥</i>
                  {{item1.dizhi_money}}
                </span>
              </div>
              <div class="two5_1_zhusu">
                <span  class="two5_1_zhusu1">
                  <a href="#">{{item1.zhusu}}</a>
                </span>
                <span class="two5_1_zhusu2">
                  <i>￥</i>
                  {{item1.shuzu_money}}
                </span>
              </div>
            </div>
          </div>
          <div class="two5_a">
            <el-button class="two6_1">
              <el-link href="https://www.tujia.com/pwa/thursday/sale.htm" target="_blank">查看更多 ></el-link>
            </el-button>
          </div>
        </div>
    </div>
    <!-- 公寓 -->
    <div class="three">
      <div class="three_gongyu">
        <h3>玩转民宿公寓</h3>
        <div class="three_gongyu_image">
          <router-link to="./Party" :underline="false" class="three_gongyu_link" v-for="(item,index) in gongyu" :key="index">
            <img :src="item.url" class="three_gongyu_url">
            <div :class="item.class1">
              <p class="p1">{{item.p1}}</p>
              <p class="p2">{{item.p2}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 热门 -->
    <div class="four">
      <div class="four_remeng">
        <h3>当季热门</h3>
        <div class="four_remeng_div">
          <el-link :underline="false" class="four_remeng_image" v-for="(item,index) in remeng" :key="index">
            <img :src="item.url" class="three_gongyu_url">
          </el-link>
        </div>
      </div>
    </div>
    <!-- //安心住保障 -->
    <div class="six">
      <div class="six_baozhang">
        <h3>安心住保障</h3>
        <div class="six_baozhang_div">
          <el-link :underline="false" class="six_baozhang_image" v-for="(item,index) in baozhang" :key="index">
            <div class='six_baozhang_jlt'>
              <img src="../../../../build/page-index.d836e82.png" :class="item.class2">
            </div>
            <p class="six_baozhang_p">
              {{item.title1}}
              <span>{{item.title2}}</span>
            </p>
          </el-link>
        </div>
      </div>
    </div>
    <!-- //房客体验 -->
    <div class="seven">
      <div class="seven_wai_div">
        <h3>房客体验</h3>
        <div class="seven_tiyan_div">
          <div class="seven_tiyan_ones"  v-for="(item,index) in tiyan" :key="index">
            <el-link :underline="false" class="seven_tiyan_image">
              <img :src="item.url" class="seven_tiyan_url">
              <div class="seven_tiyan_image_div">
                <span class="seven_tiyan_image_span1">
                  <i class="el-icon-view"></i>
                  {{item.num1}}
                </span>
                <span class="seven_tiyan_image_span2">
                  <i class="el-icon-chat-dot-round"></i>
                  {{item.num2}}
                </span>
              </div>
            </el-link>
            <div class="seven_tiyan_text">
              <a href="#" class="seven_tiyan_p">
                {{item.title1}}
              </a>
               <span class="seven_tiyan_span">{{item.title2}}</span>
            </div>
          </div>
        </div>
        <div class="two5_a">
          <el-button class="two6_1">
            <el-link href="https://www.tujia.com/pwa/thursday/sale.htm" target="_blank">查看更多 ></el-link>
          </el-button>
        </div>
      </div>
    </div>
    <div class="eight">
      <div class="eight_wai_div">
        <h3>房东那些不可描述的小秘密</h3>
        <div class="eigth_xiaomimi_div">
          <el-link :underline="false" class="eigth_xiaomimi_div_link1" @click="Lefthua">
            <i class="el-icon-arrow-left"></i>
          </el-link>
          <div class="eigth_xiaomimi_nei">
            <el-link :underline="false" class="eigth_xiaomimi_image" v-for="(item,index) in xiaomimi" :key="index">
              <img :src="item.url" class="eigth_xiaomimi_img">
              <div class="eigth_link_div">
                <div class="eigth_link_div_div">
                  <h4>后海民宿小院故事，那些人生中的可遇不可求</h4>
                  <p>一个闹中取静的院落，感受老北京地道生活</p>
                </div>
              </div>
            </el-link>
          </div>
          <el-link :underline="false" class="eigth_xiaomimi_div_link2" @click="Righthua">
            <i class="el-icon-arrow-right"></i>
          </el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentes',
  data () {
    return {
      // 轮播图
      lunbo_object: [],
      // 特卖对象
      src: [],
      // 公寓
      gongyu: [],
      // 保障
      baozhang: [
        {
          class2: 'six_baozhang_div_jlt1',
          title1: '先行赔付',
          title2: '1000万保障金'
        },
        {
          class2: 'six_baozhang_div_jlt2',
          title1: '赠送保险',
          title2: '21万人身保险'
        },
        {
          class2: 'six_baozhang_div_jlt3',
          title1: '贴心客服',
          title2: '7*24小时在线'
        },
        {
          class2: 'six_baozhang_div_jlt4',
          title1: '房屋保真',
          title2: '4项上房审核'
        }],
      // 热门
      remeng: [
        {
          url: 'https://pic1.tujia.com/upload/config/day_190405/201904050004488392.png'
        },
        {
          url: 'https://pic2.tujia.com/upload/config/day_180917/20180917171730580.jpg'
        },
        {
          url: 'https://pic3.tujia.com/upload/config/day_180917/201809171715275778.jpg'
        },
        {
          url: 'https://pic4.tujia.com/upload/config/day_180917/201809171713061947.jpg'
        },
        {
          url: 'https://pic.tujia.com/upload/config/day_180917/201809171716233065.jpg'
        },
        {
          url: 'https://pic1.tujia.com/upload/config/day_180917/201809171718286640.jpg'
        }],
      // 房东的小秘密
      xiaomimi: [
        {
          url: 'https://pic1.tujia.com/upload/config/day_190725/201907251134566749.jpg'
        },
        {
          url: 'https://pic2.tujia.com/upload/config/day_190725/201907251123118634.jpg'
        },
        {
          url: 'https://pic3.tujia.com/upload/config/day_190110/201901101851532707.jpg'
        },
        {
          url: 'https://pic4.tujia.com/upload/config/day_190110/201901101852033693.jpg'
        },
        {
          url: 'https://pic.tujia.com/upload/config/day_180907/201809071003052880.jpg'
        },
        {
          url: 'https://pic1.tujia.com/upload/config/day_180814/201808141052439236.jpg'
        },
        {
          url: 'https://pic2.tujia.com/upload/config/day_170721/201707211521224663.jpg'
        },
        {
          url: 'https://pic3.tujia.com/upload/config/day_180719/201807191006595811.jpg'
        }
      ],
      // 搜索
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      // 特卖
      ul1: [],
      tiyan: [
        {
          num1: '92692',
          num2: '8',
          title1: '塞舌尔绝美海滩，你都去过了吗？',
          title2: '普拉兰岛必打卡海滩~',
          url: '//pic1.tujia.com/upload/config/day_190725/201907251111063382.jpg'
        },
        {
          num1: '80902',
          num2: '1',
          title1: '在古国意大利，探秘时尚的艺术与闪耀的人文',
          title2: '9天畅游攻略',
          url: '//pic2.tujia.com/upload/config/day_190725/201907251142155319.jpg'
        },
        {
          num1: '77990',
          num2: '0',
          title1: '烟雨漓江，沉醉不知归路',
          title2: '从桂林顺流而下去阳朔',
          url: '//pic3.tujia.com/upload/config/day_190725/201907251116535171.jpg'
        }
      ],
      // 轮播图上的输入框，保存显示的内容
      value: '',
      value1: '',
      input: '',

      // 接收点击所产生的数
      items: 1,
      style: {
        isdiqu: true,
        diqu1: 'diqu1',
        diqu2: 'diqu2'
      }
    }
  },
  mounted () {
    this.axios.get('http://localhost:5555/home_diqu', {
      uli_id: 'this.items'
    }
    ).then((response) => {
      this.ul1 = response.data
      this.src = response.data[this.items - 1].Temai
    }).catch(error => {
      console.log(error)
      alert('网络错误，不能访问')
    })
    this.axios.get('http://localhost:5555/home_imge'
    ).then((response) => {
      this.lunbo_object = response.data
    }).catch(error => {
      console.log(error)
      alert('网络错误，不能访问')
    })
    this.axios.get('http://localhost:5555/home_gongyu'
    ).then((response) => {
      // console.log(response)
      this.gongyu = response.data
    }).catch(error => {
      console.log(error)
      alert('网络错误，不能访问')
    })
  },
  methods: {
    fun1: function (item, trues) {
      this.items = item
      this.src = this.ul1[this.items - 1].Temai
      for (let i = 0; i < this.ul1.length; i++) {
        this.ul1[i].diqu_true = 0
      }
      this.ul1[this.items - 1].diqu_true = 1
    },
    getvalue: function () {
      console.log(this.input)
      console.log(this.value)
      console.log(this.value1)
    },
    Lefthua: function () {
      console.log(1)
    },
    Righthua: function () {
      console.log(2)
    }
  }
}
</script>

<style scoped>
@import "./content.css";
</style>
