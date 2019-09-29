var express=require('express');
var app=express();
var port=8888;


app.all('*', (req, res, next) => {
    console.log(123)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
app.get('/',(req,res)=>{
    res.send('嘻嘻，成功获得数据啦！');
    
})
app.listen(port,(req,res)=>{
    console.log('已启动！！！！！！');
})