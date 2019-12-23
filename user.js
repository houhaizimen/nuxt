// 创建路由实例
const user = new require('koa-router')()
// 引入连接池
const query = require('./pool')

user
.get('/ageCount', async (ctx, next) => {
    let sql  = 'select count(*) as total from user where age between ? and ? and sex = ?'
    let data = await query(sql, [22, 24])
    ctx.body = data
})
.get('/addUser', async(ctx, next) => {
    let sql = 'insert into user values(null,?, ?, ?)'
    let data = await query(sql, [])
    ctx.body = data
})

module.exports = user