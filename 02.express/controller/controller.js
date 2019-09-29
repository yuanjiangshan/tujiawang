//引入服务层
let Service = require('../service/service.js')
//将getController接口暴露出去
module.exports.getController = function (req,res){
  let service = new Service(req,res);
  service.getService(function(ob,ob1){
    console.log(req.body)
    res.json({background:ob,styles:ob1});
  })
}