// 引入模型层的数据
let Home_gongyu = require('../../model/home/Home_GongYu')
class GongYu{
  constructor(req,res){
    this.req = req;
    this.res = res;
  }
  getHomeGongyu (callback) {
    let home_gongyu = new Home_gongyu(this.req,this.res);
    home_gongyu.getGongyu(function(ob){
      // console.log(ob);
      callback(ob)
    })
  }
}
module.exports = GongYu;