// 引入模型层的数据
let Home_lunbo = require('../../model/home/Home_lunbo')
class Lunbo{
  constructor(req,res){
    this.req = req;
    this.res = res;
  }
  getHomelunbo (callback) {
    let home_lunbo = new Home_lunbo(this.req,this.res);
    home_lunbo.getLunboImage(function(ob){
      callback(ob)
    })
  }
}
module.exports = Lunbo;