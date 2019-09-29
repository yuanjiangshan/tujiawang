//引入它的父类
let sqlBase = require('../sqlBase');
class Mai extends sqlBase{
  constructor(req,res){
    super();
    this.req = req;
    this.res = res;
  }
  getMai(ul1_id,callback){
    //let一个sql语句，获取数据库中的数据
    let sql = `select * from home_temai where some_mai = ${ul1_id}`;
    this.connection.query(sql,function(err,result){
      if (err) {
        console.log(err.message);
        return;
      }
      callback(result);
    });
  }
}
module.exports = Mai;