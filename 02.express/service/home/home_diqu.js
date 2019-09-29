// let Home_lunbo = require('../../model/home/Home_lunbo');
let Home_mai = require('../../model/home/home_mai');
let Home_temai_diqu = require('../../model/home/home_temai_diqu');
class ServiceLunbo{
  constructor(req,res){
    this.req = req;
    this.res = res;
  }
  getData(callback){
    //实例化对象
    let home_mai = new Home_mai(this.req,this.res);
    let home_temai_diqu = new Home_temai_diqu(this.req,this.res);
    //对数据进行处理
    home_temai_diqu.getDiquData((diqu)=>{
      for (let i = 0; i < diqu.length; i++) {
        let diqu_id = diqu[i].ul1_id
        home_mai.getMai(diqu_id,(mai)=>{          
          diqu[i].Temai = mai
          if (i==diqu.length-1) {
            callback(diqu);
          }
        });        
      }
    })
  }
}
module.exports = ServiceLunbo;