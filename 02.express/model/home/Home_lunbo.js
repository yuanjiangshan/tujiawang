//引入它的父类
let sqlBase = require('../sqlBase');
class Lunbo extends sqlBase{
  constructor(req,res){
    super();
    this.req = req;
    this.res = res;
  }
  getLunboImage(callback){
    //let一个sql语句，获取数据库中的数据
    let sql = `select * from home_head`;
    this.connection.query(sql,function(err,result){
      if (err) {
        console.log(err.message);
        return;
      }
      callback(result);
    });
  }
}
module.exports = Lunbo;