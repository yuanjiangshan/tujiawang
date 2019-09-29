//引入业务逻辑层的对象
let Home_lunbo = require('../../service/home/home_lunbo');
//将数据暴露出去
module.exports.index = function(req,res){
  // console.log(req);
  //实例化业务逻辑层
  let homes = new Home_lunbo(req,res);
  homes.getHomelunbo((url)=>{ 
    res.json(url)
  });
}