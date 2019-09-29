//引入业务逻辑层的对象
let Home_gongyu = require('../../service/home/home_gongyu');
//将数据暴露出去
module.exports.index = function(req,res){
  //实例化业务逻辑层
  let home_gongyu = new Home_gongyu(req,res);
  home_gongyu.getHomeGongyu((diqu)=>{
    // console.log(diqu);
    res.json(diqu)
  });
}