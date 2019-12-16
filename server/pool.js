// 引入mysql对象
const mysql = require('mysql')
// 创建连接池
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3308',
    user: 'root',
    password: '',
    database: 'testTable',
    connectionLimit:20
})
// pool.connect()

function query(sql, params=null) {
    return new Promise((resolve, reject) => {
        // 执行sql语句
        pool.query(sql, params, (err, res) => {
            if (err) {
                reject({
                    code: 400,
                    data: '查询失败'
                })
            } else {
                resolve({
                    code: 200,
                    data: res
                })
            }
        })
        // 关闭连接
        // pool.end
    })
}
module.exports = query