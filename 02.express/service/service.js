// 引入模型层的数据
let LBackgroundModel = require('../model/LBackgroundModel.js')
let ClassModel = require('../model/ClassModel.js')
class Service{
  constructor(req,res){
    this.req = req;
    this.res = res;
  }
  getService (callback) {
    let LBM = new LBackgroundModel(this.req,this.res);
    let CM = new ClassModel(this.req,this.res);
    LBM.getLBackgroundMode(function(ob){
      CM.getClassModel(function(ob1){
        callback(ob,ob1)
      })
    })

  }
}
module.exports = Service;