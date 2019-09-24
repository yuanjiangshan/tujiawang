// 引入模型层的数据
let LBackgroundModel = require('../model/LBackgroundModel.js')
class Service{
  constructor(req,res){
    this.req = req;
    this.res = res;
  }
  getService (callback) {
    let LBM = new LBackgroundModel(this.req,this.res);
    LBM.getLBackgroundMode(function(ob){
      callback(ob)
    })

  }
}
module.exports = Service;