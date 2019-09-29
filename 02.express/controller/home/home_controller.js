//引入业务逻辑层的对象
let Home_diqu = require('../../service/home/home_diqu');
//将数据暴露出去
module.exports.index = function(req,res){
  // console.log(req);
  //实例化业务逻辑层
  let home_diqu = new Home_diqu(req,res);
  home_diqu.getData((diqu)=>{
    // console.log(diqu);
    res.json(diqu)
  });
}