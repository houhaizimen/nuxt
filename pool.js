const mysql = require('mysql')
// 创建连接池
const pool = mysql.createPool({
    host: '47.101.134.233',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'nuxtTable',
    connectionLimit:20
})

// 查询数据库的方法
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