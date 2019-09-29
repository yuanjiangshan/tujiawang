<template>
  <div id="box">
    <!-- 导航栏 -->
    <div class="header_nav">
      <div class="header_content">
        <a href="https://www.tujia.com/" target="_blank" title="途家网首页" class="header_logo"></a>
        <ul class="header_list">
          <li>
            <a :href="headerList[0].url">{{headerList[0].title}}</a>
          </li>
          <li>
            <a :href="headerList[1].url">{{headerList[1].title}}</a>
          </li>
        </ul>
        <ul class="header_loginBox">
          <li>
            <a href="#" class="header_login">{{headerList[2].title}}</a>
          </li>
          <li>
            <a href="#" class="header_rigest">{{headerList[3].title}}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 主题 -->
    <div class="theme">
      <img src="https://pic.tujia.com/upload/WorldCMSActivity/day_170707/201707071117242442.jpg" />
      <div class="login_logo">
        <a href="#">
          <i class="iconfont icon-xinlang"></i>
        </a>
        <a href="#" class="logo_a">
          <i class="iconfont icon-icon-"></i>
        </a>
      </div>
    </div>
    <div class="content_nav" id="contentNav">
      <ul class="content_title">
        <li class="titleBox">
          <a href="#0" class="titleList">{{beijingList[0].title}}</a>
        </li>
        <li class="titleBox">
          <a href="#1" class="titleList">{{contentList[0].title}}</a>
        </li>
        <li class="titleBox">
          <a href="#2" class="titleList">{{contentList[1].title}}</a>
        </li>
        <li class="titleBox">
          <a href="#3" class="titleList">{{contentList[2].title}}</a>
        </li>
        <li class="titleBox">
          <a href="#4" class="titleList">{{contentList[3].title}}</a>
        </li>
        <li class="titleBox">
          <a href="#5" class="titleList">{{contentList[4].title}}</a>
        </li>
        <li class="titleBox">
          <a href="#6" class="titleList">{{contentList[5].title}}</a>
        </li>
        <li class="titleBox">
          <a href="#" class="titleMore" @mouseover="show()" @mouseout="close()">
            {{contentList[6].more}}
            <i class="iconfont icon-xiangxia"></i>
            <div :class="styleC.class3">
              <ul class="moreTitle">
                <li id="titleBoxId9">
                  <a href="#8" class="moreContent">{{contentList[7].title}}</a>
                </li>
                <li id="titleBoxId10">
                  <a href="#9" class="moreContent">{{contentList[8].title}}</a>
                </li>
                <li id="titleBoxId11">
                  <a href="#10" class="moreContent">{{contentList[9].title}}</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="content">
      <div class="city_wrap">
        <div class="city_title_box">
          <p class="city_title_name">{{beijingList[0].title}}</p>
          <div class="city_intro">
            <img :src="beijingList[0].url" alt class="city_title_img" />
            <p class="city_content">{{beijingList[0].content}}</p>
          </div>
        </div>
        <div class="house_wrap">
          <ul class="house_top_box">
            <li
              class="house_top"
              v-for="item in beijingList[0].list1"
              v-bind:key="item.id"
            >
              <a href="#" target="_blink" class="house_pic">
                <img :src="item.url" alt />
                <div class="dis_box">
                  <p>{{item.dis}}</p>
                </div>
                <i class="iconfont icon-like"></i>
              </a>
              <div class="house_info">
                <div class="info_title">
                  <a href="#">{{item.title}}</a>
                </div>
                <div class="info_dis">
                  <span>{{item.type}} |</span>
                  <span>{{item.houseNum}} |</span>
                  <span>{{item.people}} |</span>
                  <a href="#" class="iconfont icon-dingwei">{{item.mapTitle}}</a>
                </div>
                <div class="info_price">
                  <span>
                    ¥
                    <span class="pirce_number">{{item.price}}</span>
                  </span>
                  <a href="#" class="book">立即预定</a>
                </div>
                <!-- 何时开抢 -->
                <div class="data_info">&nbsp;</div>
              </div>
            </li>
            <li class="house_bottom" v-for="item in beijingList[0].list2" v-bind:key="item.id">
              <a href="#" target="_blink" class="house_pic">
                <img :src="item.url" alt />
                <div class="dis_box">
                  <p>{{item.dis}}</p>
                </div>
                <i class="iconfont icon-like"></i>
              </a>
              <div class="house_info">
                <div class="info_title">
                  <a href="#">{{item.title}}</a>
                </div>
                <div class="info_dis">
                  <span>{{item.type}} |</span>
                  <span>{{item.houseNum}} |</span>
                  <span>{{item.people}} |</span>
                  <a href="#" class="iconfont icon-dingwei">{{item.mapTitle}}</a>
                </div>
                <div class="info_price">
                  <span>
                    ¥
                    <span class="pirce_number">{{item.price}}</span>
                  </span>
                  <a href="#" class="book">立即预定</a>
                </div>
                <!-- 何时开抢 -->
                <div class="data_info">&nbsp;</div>
              </div>
            </li>
          </ul>
          <div class="know_more">
            <a href="#">
              更多北京美屋
              <i class="iconfont icon-you"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- 与第一个不相同 -->
      <div class="city_wrap">
        <div
          class="city_title_box"
          :id="item.id"
          v-for="(item,index) in contentList"
          v-bind:key="index"
        >
          <p class="city_title_name">{{item.title}}</p>
          <div class="city_intro2" v-if="item.id != 7">
            <p class="city_content">{{item.content}}</p>
            <img :src="item.url" alt class="city_title_img" />
          </div>
          <div class="house_wrap">
            <ul class="house_top_box">
              <li class="house_top" v-for="items in item.list1" v-bind:key="items.id">
                <a href="#" target="_blink" class="house_pic">
                  <img :src="items.url" alt />
                  <div class="dis_box">
                    <p>{{items.dis}}</p>
                  </div>
                  <i class="iconfont icon-like"></i>
                </a>
                <div class="house_info">
                  <div class="info_title">
                    <a href="#">{{items.title}}</a>
                  </div>
                  <div class="info_dis">
                    <span>{{items.type}} |</span>
                    <span>{{items.houseNum}} |</span>
                    <span>{{items.people}} |</span>
                    <a href="#" class="iconfont icon-dingwei">{{items.mapTitle}}</a>
                  </div>
                  <div class="info_price">
                    <span>
                      ¥
                      <span class="pirce_number">{{items.price}}</span>
                    </span>
                    <a href="#" class="book">立即预定</a>
                  </div>
                  <!-- 何时开抢 -->
                  <div class="data_info"></div>
                </div>
              </li>
              <li class="house_bottom" v-for="items in item.list2" v-bind:key="items.id">
                <a href="#" target="_blink" class="house_pic">
                  <img :src="items.url" alt />
                  <div class="dis_box">
                    <p>{{items.dis}}</p>
                  </div>
                  <i class="iconfont icon-like"></i>
                </a>
                <div class="house_info">
                  <div class="info_title">
                    <a href="#">{{items.title}}</a>
                  </div>
                  <div class="info_dis">
                    <span>{{items.type}} |</span>
                    <span>{{items.houseNum}} |</span>
                    <span>{{items.people}} |</span>
                    <a href="#" class="iconfont icon-dingwei">{{items.mapTitle}}</a>
                  </div>
                  <div class="info_price">
                    <span>
                      ¥
                      <span class="pirce_number">{{items.price}}</span>
                    </span>
                    <a href="#" class="book">立即预定</a>
                  </div>
                  <!-- 何时开抢 -->
                  <div class="data_info"></div>
                </div>
              </li>
            </ul>
            <div class="know_more" v-if="item.id != 7">
              <a href="#">
                {{item.city}}
                <i class="iconfont icon-you"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer_box">
        <div class="footer_left">
          <div class="left_list">
           <a href="#">关于我们&nbsp;</a>|
           <a href="#">我是房客&nbsp;</a>|
           <a href="#">加入途家&nbsp;</a>|
           <a href="#">网站地图&nbsp;</a>
          </div>
          <p>© Copyright 2019 tujia.com 途家版权所有不得转载</p>
          <br>
          <a href="#" class="left_num">津ICP备17006480号</a>
        </div>
        <div class="foot_right">
          <div class="right_number">
            <p>国内客服</p>
            <p>400-188-1234</p>
          </div>
          <div class="right_overseas">
            <p>海外客服</p>
            <span class="overseas_num">400-188-1234转2</span>
            <span>86-10-80697258转2(境外拨打)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'party',
  data () {
    return {
      headerList: [
        {
          title: '首页',
          url: 'https://www.tujia.com/'
        },
        {
          title: '发现',
          url: 'https://travel.tujia.com'
        },
        {
          title: '登录'
        },
        {
          title: '注册'
        }
      ],
      beijingList: [
        {
          id: 0,
          title: '聚在•北京',
          url:
            'https://pic.tujia.com/upload/WorldCMSActivity/day_170602/20170602144343868.png',
          content:
            '小胡同、老茶馆、酒吧街、商业区，无限的摩登元素与老北京地道的京味儿相互交融，北京是一座兼具古典风韵与时尚气息的迷人城市。慢一点，灵魂才会跟得上；慢下来，才能感受到城市的脉搏。毕业聚会、团队建设、好友相聚，多个轰趴house等你选！去感受帝都，就现在！',
          list1: [
            {
              id: 1,
              url: 'https://pic.tujia.com/upload/landlordunit/day_160720/thumb/201607201600115641_580_358.jpg',
              dis: '推荐理由：自带150平独立院落，可进行户外活动，自助烧烤',
              title: '聚嗨轰趴别墅独栋独院',
              type: '别墅',
              houseNum: '八居',
              people: '宜住14人',
              mapTitle: '地图',
              price: '3550'
            },
            {
              id: 2,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_170311/thumb/201703111106532314_580_358.jpg',
              dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '通州宋庄艺术庭院别墅聚会熊出没轰趴馆',
              type: '别墅',
              houseNum: '十居',
              people: '宜住20人',
              mapTitle: '地图',
              price: '5980'
            }
          ],
          list2: [
            {
              id: 3,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_170322/thumb/201703221152463964_370_232.jpg',
              dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '自由空间-古北水镇地中海双卧双卫叠拼别...',
              type: '别墅',
              houseNum: '二居',
              people: '宜住4人',
              mapTitle: '地图',
              price: '1288'
            },
            {
              id: 4,
              url: 'https://pic.tujia.com/upload/landlordunit/day_170627/thumb/201706271318014374_370_232.jpg',
              title: '【水镇小筑】观景庭院叠墅（古北水镇）',
              type: '别墅',
              houseNum: '二居',
              people: '宜住4人',
              mapTitle: '地图',
              price: '888'
            },
            {
              id: 5,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_180420/thumb/201804202319469915_370_232.jpg',
              title: '乐聚派3号馆',
              type: '别墅',
              houseNum: '十九居',
              people: '宜住38人',
              mapTitle: '地图',
              price: '3680'
            }
          ]
        }
      ],
      contentList: [
        {
          id: 1,
          title: '潮在•上海',
          city: '更多上海好屋',
          url:
             'https://pic.tujia.com/upload/WorldCMSActivity/day_170602/201706021447005404.png',
          content:
             '古老斑驳的石库门，高脚杯、咖啡吧和老唱片里都流淌着香艳的上海情，品品地道上海菜。明亮繁华、闲适安逸皆上海。上海的轰趴馆更具小资情调，喊几个亲朋好友，一起洗手作羹汤，亦可麻将唱k嗨玩到天明！',
          list1: [
            {
              id: 1,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_171030/thumb/20171030232735681_580_358.jpg',
              dis: '推荐理由：地中海风情别墅，私密空间，尽兴玩',
              title: '海湾风情别墅（近碧海金沙景区房）',
              type: '别墅',
              houseNum: '五居',
              people: '宜住10人',
              mapTitle: '地图',
              price: '3680'
            },
            {
              id: 2,
              url: 'https://pic.tujia.com/upload/landlordunit/day_170309/thumb/2017030909134391_580_358.jpg',
              // dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: 'LAN别墅派对轰趴馆【白金瀚宫】',
              type: '别墅',
              houseNum: '三居',
              people: '宜住6人',
              mapTitle: '地图',
              price: '6800'
            }
          ],
          list2: [
            {
              id: 3,
              url: 'https://pic.tujia.com/upload/landlordunit/day_180622/thumb/201806221723139778_370_232.jpg',
              // dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '米老鼠乐园8分钟 别墅小区豪华3房2厅...',
              type: '公寓',
              houseNum: '四居',
              people: '宜住6人',
              mapTitle: '地图',
              price: '699'
            }
          ]
        },
        {
          id: 2,
          title: '乐在•广州',
          city: '更多广州好屋',
          url:
             'https://pic.tujia.com/upload/WorldCMSActivity/day_170602/201706021448479887.png',
          content:
             '广州塔小蛮腰、异域风情的沙面、130多年历史的石室圣心大教堂、已有2100多年历史的南越王墓...广州值得细细品味的地方太多。粤菜、靓汤、广式茶点…吃货听到会开怀一笑。不管是长隆附近的特色别墅，还是从化温泉的别墅群，广州的轰趴别墅总能带给你惊喜！',
          list1: [
            {
              id: 1,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_170112/thumb/201701121142574449_580_358.jpg',
              dis: '推荐理由：带有独立私家温泉池、自动麻将桌、KTV房等',
              title: '从化温泉别墅富力泉十房走性价比高要求慎拍',
              type: '别墅',
              houseNum: '18居',
              people: '宜住25人',
              mapTitle: '地图',
              price: '4980'
            },
            {
              id: 2,
              url: 'https://pic.tujia.com/upload/landlordunit/day_170104/thumb/201701041033051035_580_358.jpg',
              dis: '推荐理由：设计感十足，临近长隆乐园',
              title: '舒妞的馨家云南主题特色大三房紧靠长隆南站',
              type: '公寓',
              houseNum: '三居',
              people: '宜住6人',
              mapTitle: '地图',
              price: '590'
            }
          ],
          list2: [
            {
              id: 3,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_170426/thumb/201704261549536432_370_232.jpg',
              // dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '长隆心花怒放法式风情别墅',
              type: '别墅',
              houseNum: '六居',
              people: '宜住11人',
              mapTitle: '地图',
              price: '1188'
            }
          ]
        },
        {
          id: 3,
          title: '自在•成都',
          city: '更多成都好屋',
          url:
             'https://pic.tujia.com/upload/WorldCMSActivity/day_170602/201706021605333159.png',
          content:
             '“和我在成都的街头走一走...走到玉林路的尽头，坐在小酒馆的门口…”成都，一座来了就不想离开的城市。火锅、串串、熊猫团子、都江堰、青城山…这个城市的代表很多。来了成都，怎能不住一间美美的别墅，搓麻、撸火锅，巴适得很！',
          list1: [
            {
              id: 1,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_170326/thumb/201703261145559365_580_358.jpg',
              dis: '推荐理由：青城山下您的自家小院儿',
              title: '青城前山几度院墅三卧套房（机麻，近温泉）',
              type: '别墅',
              houseNum: '四居',
              people: '宜住6人',
              mapTitle: '地图',
              price: '1080'
            },
            {
              id: 2,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_170530/thumb/201705301305238250_580_358.jpg',
              dis: '推荐理由：设计感十足，临近长隆乐园',
              title: '成都花水湾夏威夷度假别墅',
              type: '别墅',
              houseNum: '五居',
              people: '宜住8人',
              mapTitle: '地图',
              price: '1499'
            }
          ],
          list2: [
            {
              id: 3,
              url: 'https://pic.tujia.com/upload/landlordunit/day_160612/thumb/20160612153714310_370_232.jpg',
              // dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '青城山街子古镇附近御青城高级三卧度假别...',
              type: '别墅',
              houseNum: '三居',
              people: '宜住6人',
              mapTitle: '地图',
              price: '1380'
            }
          ]
        },
        {
          id: 4,
          title: '食在•香港',
          city: '更多香港好屋',
          url:
             'https://pic.tujia.com/upload/WorldCMSActivity/day_170817/201708171548033190.jpg',
          content:
             '夜市是香港别有特色之处，每天下午四时后，街道两侧便开始摆满摊档，五光十色，人潮不断，充满了各式各样的地摊货。从傍晚6点到深夜12点是最热闹的。夜市同时也是香港龙蛇混杂之地，亦是早期烟花柳巷之地，如今已改为以玩赏游乐为目的，不妨在入夜之后“淘”上几件奇趣的小玩意儿，作为送礼或收藏的旅行手信。'
        },
        {
          id: 5,
          title: '约在•杭州',
          city: '更多杭州好屋',
          url:
             'https://pic.tujia.com/upload/WorldCMSActivity/day_170602/201706021607062581.png',
          content:
             '烟雨空濛的文艺西湖、古色古香的南宋皇城小镇、世外桃源的九溪十八涧、清幽寂静的西溪国家湿地公园等，杭州值得去细细品味。约三五好友亲朋，找一个轰趴house，聊天喝酒侃大山，好不惬意。',
          list1: [
            {
              id: 1,
              url: 'https://pic.tujia.com/upload/landlordunit/day_181019/thumb/201810191536374765_580_358.jpg',
              dis: '推荐理由：青城山下您的自家小院儿',
              title: '千岛湖欢墅翡翠岛四居室联排湖景别墅',
              type: '别墅',
              houseNum: '五居',
              people: '宜住8人',
              mapTitle: '地图',
              price: '2256'
            },
            {
              id: 2,
              url: 'https://pic.tujia.com/upload/landlordunit/day_170616/thumb/201706160025253079_580_358.jpg',
              dis: '推荐理由：设计感十足，临近长隆乐园',
              title: '千岛湖木香久居美式湖景度假别墅（整栋）',
              type: '别墅',
              houseNum: '六居',
              people: '宜住8人',
              mapTitle: '地图',
              price: '2188'
            }
          ],
          list2: [
            {
              id: 3,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_180214/thumb/20180214110706171_370_232.jpg',
              // dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '聚义厅轰趴连锁_玲珑馆',
              type: '别墅',
              houseNum: '九居',
              people: '宜住12人',
              mapTitle: '地图',
              price: '1280'
            }
          ]
        },
        {
          id: 6,
          title: '吃在•台北',
          city: '更多台北好屋',
          url:
             'https://pic.tujia.com/upload/WorldCMSActivity/day_170719/201707191801426959.png',
          content:
             '你也许对台北的夜市早有耳闻，喷香诱人的各色美食、老板爽利的吆喝声、上下翻飞的食材和人头攒动的通道，是台北最热火朝天的“夜间盛宴”。从牛排、铁板烧、蚵仔煎，到广东粥、士林大香肠、生炒花枝，全台湾的美食都在这里集合。当然，夜市的魅力远不止于此。当你心满意足地穿过夜市的美食区，立刻会被这里的百货商品区所吸引。从衣帽鞋袜到饰品箱包，商品种类琳琅满目，让人眼花缭乱。想体验台北人最丰富道地的“夜生活”，就从夜市开始吧。'
        },
        {
          id: 7,
          more: '更多'
        },
        {
          id: 8,
          title: '浪在•厦门',
          city: '更多厦门好屋',
          url:
             'https://pic.tujia.com/upload/WorldCMSActivity/day_170602/201706021609289648.png',
          content:
             '厦门，不止适合一个人文艺发呆看风景，也适合一群人大笑狂欢逛吃不停。和你们一起用脚步丈量这个城市，是我能想到最美好的事情！轰趴聚会，私密空间，更大house，亲朋好友尽兴玩！',
          list1: [
            {
              id: 1,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_161130/thumb/201611301510399776_580_358.jpg',
              dis: '推荐理由：青城山下您的自家小院儿',
              title: '厦门轰趴别墅美国馆（下单前请联系）',
              type: '别墅',
              houseNum: '八居',
              people: '宜住20人',
              mapTitle: '地图',
              price: '1950'
            }
          ]
        },
        {
          id: 9,
          title: '嗨在•深圳',
          city: '更多深圳好屋',
          url:
             'https://pic.tujia.com/upload/WorldCMSActivity/day_170602/201706021608244124.png',
          content:
             '作为一座年轻、时尚、活力的城市，深圳值得嗨玩的地方不胜列举。叫上几个小伙伴，白天去世界之窗看看生活的这个微缩版世界，够胆就去深圳欢乐谷狂欢尖叫，去吹吹大小梅沙的海风，晚上住一个轰趴大house，自己做海鲜、玩桌游，趁着时光不老，一起去嗨！',
          list1: [
            {
              id: 1,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_170310/thumb/201703102344404604_580_358.jpg',
              dis: '推荐理由：青城山下您的自家小院儿',
              title: '千岛湖欢墅翡翠岛四居室联排湖景别墅',
              type: '别墅',
              houseNum: '五居',
              people: '宜住8人',
              mapTitle: '地图',
              price: '2256'
            },
            {
              id: 2,
              url: 'https://pic.tujia.com/upload/landlordunit/day_161015/thumb/201610152002587686_580_358.jpg',
              dis: '推荐理由：设计感十足，临近长隆乐园',
              title: '千岛湖木香久居美式湖景度假别墅（整栋）',
              type: '别墅',
              houseNum: '六居',
              people: '宜住8人',
              mapTitle: '地图',
              price: '2188'
            }
          ]
        },
        {
          id: 10,
          title: '玩在•三亚',
          city: '更多三亚好屋',
          url:
            'https://pic.tujia.com/upload/WorldCMSActivity/day_170803/201708031424168464.png',
          content:
            '三亚拥有被无数城市嫉妒的清新空气，柔和海滩，一年300天以上都是晴天，在沙滩悠闲散步、沐浴傍晚温和阳光，在海边玩耍，在雨林里面呼吸健康，欣赏自然奇观，一切都是那么令人享受。天之涯、海之角，其实天堂离我们如此之近！',
          list1: [
            {
              id: 1,
              url: 'https://pic.tujia.com/upload/landlordunit/day_171022/thumb/201710220130405477_580_358.jpg',
              dis: '推荐理由：青城山下您的自家小院儿',
              title: '海缤纷 大东海半山半岛龙湾观海独栋别墅',
              type: '别墅',
              houseNum: '五居',
              people: '宜住8人',
              mapTitle: '地图',
              price: '2256'
            },
            {
              id: 2,
              url: 'https://pic.tujia.com/upload/landlordunit/day_171105/thumb/201711050859103815_580_358.jpg',
              dis: '推荐理由：设计感十足，临近长隆乐园',
              title: '千岛湖木香久居美式湖景度假别墅（整栋）',
              type: '别墅',
              houseNum: '六居',
              people: '宜住8人',
              mapTitle: '地图',
              price: '2188'
            }
          ],
          list2: [
            {
              id: 3,
              url: 'https://pic.tujia.com/upload/qualifiedpics/day_180408/thumb/201804081544101135_370_232.jpg',
              // dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '聚义厅轰趴连锁_玲珑馆',
              type: '别墅',
              houseNum: '九居',
              people: '宜住12人',
              mapTitle: '地图',
              price: '1280'
            },
            {
              id: 4,
              url: 'https://pic.tujia.com/upload/landlordunit/day_151218/thumb/201512181401046955_370_232.jpg',
              // dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '聚义厅轰趴连锁_玲珑馆',
              type: '别墅',
              houseNum: '九居',
              people: '宜住12人',
              mapTitle: '地图',
              price: '1280'
            },
            {
              id: 5,
              url: 'https://pic.tujia.com/upload/landlordunit/day_151218/thumb/201512181401046955_370_232.jpg',
              // dis: '推荐理由：配备专业KTV、台球桌、X-Box等，嗨玩一天不重样',
              title: '聚义厅轰趴连锁_玲珑馆',
              type: '别墅',
              houseNum: '九居',
              people: '宜住12人',
              mapTitle: '地图',
              price: '1280'
            }
          ]
        }
      ],
      styleC: {
        class1: 'moreList',
        class2: 'hoverList',
        class3: 'hoverList'
      }
    }
  },
  mouted () {
    this.axios.get(`http://localhost:8888/`).then(response => {
      console.log(response)
    })
  },
  methods: {
    show: function () {
      this.styleC.class3 = this.styleC.class1
    },
    close: function () {
      this.styleC.class3 = this.styleC.class2
    }
  }
}
</script>
<style  scoped>
@import url("./Party.css");
</style>
