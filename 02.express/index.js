// 引入express框架
const express = require('express');
const app = express();
//引入POST的依赖
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//设置跨域
app.all('*', (req, res, next) => {
  console.log(2222); 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// 引入控制器层的数据
let controller = require('./controller/controller.js')
let home_object = require('./controller/home/home_controller.js');
let home_diqu = require('./controller/home/home_lunbo_image.js')
let home_gongyu = require('./controller/home/home_gongyu.js')
//设置端口号
let prot = 5555;

//服务器获取方式
app.post('/',controller.getController)
app.get('/home_diqu',home_object.index)
app.get('/home_imge',home_diqu.index)
app.get('/home_gongyu',home_gongyu.index)

//监听端口
app.listen(prot,()=>{
  console.log(`端口${prot}启动`)
})