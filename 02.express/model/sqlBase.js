class SqlBase {
  constructor() {
      let mysql = require('mysql'); //调用MySQL模块

      //1，创建一个connection
      this.connection = mysql.createConnection({
          host: 'cdb-8ve1tr5a.cd.tencentcdb.com', //主机 ip
          user: 'root', //MySQL认证用户名
          password: 'yh123456', //MySQL认证用户密码
          port: '10007', //端口号
          database: 'tujia__item' //数据库里面的数据
      });
      //2,连接
      this.connection.connect();
  }
}
// 将SqlBase暴露出去
module.exports = SqlBase;