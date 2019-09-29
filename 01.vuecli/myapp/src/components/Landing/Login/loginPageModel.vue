<template>
<div class="box">
  <div class="liBox">
    <div class="leftBox">
      <div class="navABox">
        <a href="#" :class='styles.class4' @mouseenter="goIn()" @mouseleave="goOut()" @click="cutover()">普通方式登陆</a>
        |
        <a href="#" :class='styles.class5' @mouseenter="goIn1()" @mouseleave="goOut1()" @click="cutover1()">手机动态密码登陆</a>
      </div>
      <div class="bottomBox" v-if="this.mode.mode3">
        <el-input v-model="input.user" placeholder="邮箱/手机号/用户名" class="inputBox"></el-input>
        <el-input placeholder="密码" v-model="input.password" show-password class="inputBox"></el-input>
        <div class="testBox">
          <el-input v-model="input.VerificationCode" placeholder="请输入内容" class="inputBox_test"></el-input>
          <div class="imgsBox">
            <img src="https://passport.tujia.com/PortalSite/VerifyImage?r=0.8949923828373143" class="imgs">
          </div>
        </div>
        <div class="selectBox">
            <el-checkbox v-model="checked" text-color='#B4B4B4' fill='#B4B4B4'  class="radioBox" >保存登陆一个月</el-checkbox>
            <div class="forget" @mouseenter="enter()" @mouseleave="leave()"><a href="" :class="styles.class8">忘记密码</a></div>
        </div>
          <el-button type="warning" class="logins">登陆</el-button>
      </div>
      <div class="bottomBox" v-if="!this.mode.mode3">
        <el-input v-model="input.phoneCode" placeholder="请输入手机号" class="inputBox"></el-input>
        <div class="testBox">
          <el-input v-model="input.VerificationCode" placeholder="请输入验证码" class="inputBox_test"></el-input>
          <div class="imgsBox">
            <img src="https://passport.tujia.com/PortalSite/VerifyImage?r=0.8949923828373143" class="imgs">
          </div>
        </div>
        <div class="testBox">
          <el-input v-model="input.password" placeholder="请输入动态密码" class="inputBox_test"></el-input>
          <div class="imgsBox">
            <button :class="this.styles.class11" @mouseenter="jin()" @mouseleave="chu()">获取手机验证码</button>
          </div>
        </div>
        <div class="selectBox">
            <el-checkbox v-model="checked" text-color='#ffffff' fill='#B4B4B4'  class="radioBox" >保存登陆一个月</el-checkbox>
            <div class="forget" @mouseenter="enter()" @mouseleave="leave()"><a href="" :class="styles.class8">忘记密码</a></div>
        </div>
          <el-button type="warning" class="logins">登陆</el-button>
      </div>
    </div>
    <div class="leftBox1">
      <div class="CooperationBox">
        <h4 class="colors">合作网站账号登陆</h4>
        <div class="iconBox">
          <div :class="items.class3" v-for="items in styles.icon" :key="items.id" @mouseenter="qie(items.id)" @mouseleave="qie_chu(items.id)"><a href="" class="a_b"></a></div>
        </div>
        <div class="registeredBox">
          还不是途家会员？
          <a href="">立即注册>></a>
        </div>
        <div class="imgStyle">
          <a href=""><img src="https://staticfile.tujia.com/upload/config/day_171219/201712191757191955.jpg" ></a>
        </div>
        <div class="appStyle">
          下载手机APP，随时随地订房
        </div>
        <div class="ORcodeBox">
          <img src="https://staticfile.tujia.com/PassportSite/Images/code.png" alt="">
          <div class="ORcode">
            <div class="downloadBox" v-for="item in styles.Down" :key="item.id" @mouseenter="xian(item.class_id)" @mouseleave="yin(item.class_id)">
              <a href="" class="AndroidBox"></a>
                <div class="AndroidImgBox">
                    <img :src="item.url" alt="" class="AndroidImg">
                </div>
                  <a href="" :class="item.class3">{{item.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>
<script>
export default {
  name: 'loginPageModel',
  data () {
    return {
      styles: {
        pattern: [],
        class1: 'navA1',
        class2: 'navA2',
        class3: 'navA3',
        class4: 'navA1',
        class5: 'navA2',
        class6: 'forgeter1',
        class7: 'forgeter2',
        class8: 'forgeter1',
        class9: 'buttontBox1',
        class10: 'buttontBox2',
        class11: 'buttontBox1',
        icon: [],
        Down: []
      },
      input: {
        user: '',
        password: '',
        VerificationCode: '',
        phoneCode: ''
      },
      checked: false,
      mode: {
        mode1: true,
        mode2: false,
        mode3: true,
        mode4: false
      }
    }
  },
  methods: {
    enter () {
      this.styles.class8 = this.styles.class7
    },
    leave () {
      this.styles.class8 = this.styles.class6
    },
    jin () {
      this.styles.class11 = this.styles.class10
    },
    chu () {
      this.styles.class11 = this.styles.class9
    },
    goIn () {
      if (this.mode.mode3 === false) {
        this.styles.class4 = this.styles.class3
      }
    },
    goOut () {
      if (this.mode.mode3 === false) {
        this.styles.class4 = this.styles.class2
      }
    },
    goIn1 () {
      if (this.mode.mode4 === false) {
        this.styles.class5 = this.styles.class3
      }
    },
    goOut1 () {
      if (this.mode.mode4 === false) {
        this.styles.class5 = this.styles.class2
      }
    },
    cutover () {
      if (this.mode.mode3 === false) {
        this.styles.class4 = this.styles.class1
        this.styles.class5 = this.styles.class2
        this.mode.mode4 = !this.mode.mode4
        this.mode.mode3 = !this.mode.mode3
        this.input.user = ''
        this.input.password = ''
        this.input.VerificationCode = ''
        this.input.phoneCode = ''
      }
    },
    cutover1 () {
      if (this.mode.mode3 === true) {
        this.styles.class5 = this.styles.class1
        this.styles.class4 = this.styles.class2
        this.mode.mode4 = !this.mode.mode4
        this.mode.mode3 = !this.mode.mode3
        this.input.user = ''
        this.input.password = ''
        this.input.VerificationCode = ''
        this.input.phoneCode = ''
      }
    },
    qie (id) {
      if (id === 1) {
        this.styles.icon[id - 1].class3 = this.styles.icon[id - 1].class2
      } else if (id === 2) {
        this.styles.icon[id - 1].class3 = this.styles.icon[id - 1].class2
      } else if (id === 3) {
        this.styles.icon[id - 1].class3 = this.styles.icon[id - 1].class2
      }
    },
    qie_chu (id) {
      if (id === 1) {
        this.styles.icon[id - 1].class3 = this.styles.icon[id - 1].class1
      } else if (id === 2) {
        this.styles.icon[id - 1].class3 = this.styles.icon[id - 1].class1
      } else if (id === 3) {
        this.styles.icon[id - 1].class3 = this.styles.icon[id - 1].class1
      }
    },
    xian (id) {
      if (id === 1) {
        this.styles.Down[id - 1].class3 = this.styles.Down[id - 1].class2
      } else if (id === 2) {
        this.styles.Down[id - 1].class3 = this.styles.Down[id - 1].class2
      }
    },
    yin (id) {
      if (id === 1) {
        this.styles.Down[id - 1].class3 = this.styles.Down[id - 1].class1
      } else if (id === 2) {
        this.styles.Down[id - 1].class3 = this.styles.Down[id - 1].class1
      }
    }
  },
  mounted () {
    this.axios.post('http://192.168.3.100:5555/',
      {
        classId: '1'
      }).then((res) => {
      if (res.status === 200) {
        this.styles.icon = res.data.styles
      }
    }).catch(function (err) {
      console.log(err)
    })
    this.axios.post('http://192.168.3.100:5555/',
      {
        classId: '2'
      }).then((res) => {
      if (res.status === 200) {
        this.styles.Down = res.data.styles
      }
    }).catch(function (err) {
      console.log(err)
    })
    this.axios.post('http://192.168.3.100:5555/',
      {
        classId: '3'
      }).then((res) => {
      if (res.status === 200) {
        this.styles.pattern = res.data.styles
      }
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style scoped>
@import './loginPageModel.css';
</style>
