// 引入sqlBase文件
let sqlBase = require('./sqlBase.js')

class LBackgroundMode extends sqlBase{
  constructor(req,res){
    super();
    this.req = req;
    this.res = res;
  }
  getLBackgroundMode(callback){
    //定义sql语句
    let sql = `select * from login_background where bgId = ${this.req.body.id}`;
    this.connection.query(sql,function(err,result){
      if(err){
        console.log("[查询] - ", err.message);
        return;
      }
      console.log(result)
      callback(result);
    });
  }
}
// 将loginBackground类暴露出去
module.exports = LBackgroundMode;