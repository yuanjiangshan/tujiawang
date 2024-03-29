// 引入sqlBase文件
let sqlBase = require('./sqlBase.js')

class ClassModel extends sqlBase{
  constructor(req,res){
    super();
    this.req = req;
    this.res = res;
  }
  getClassModel(callback){
    //定义sql语句
    let sql = `select * from login_class where styles_id = '${this.req.body.classId}'`;
    this.connection.query(sql,function(err,result){
      if(err){
        console.log("[查询] - ", err.message);
        return;
      }
      callback(result);
    }); 
  }
}
// 将ClassModel类暴露出去
module.exports = ClassModel;