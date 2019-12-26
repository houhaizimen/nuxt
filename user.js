// 创建路由实例
const user = new require('koa-router')()
// 引入连接池
const query = require('./pool')

user
.get('/ageCount', async (ctx, next) => {
    /**
     * start 起始年龄  必传
     * end 结束年龄  必传
     */
    let $sex = ctx.request.query.sex
    let $start = ctx.request.query.start
    let $end = ctx.request.query.end
    let reqArr = []
    let sql = ''
    if (!$sex) {
        sql = 'select count(*) as total from user where age between ? and ?'
        reqArr = [$start, $end]
    } else {
        sql  = 'select count(*) as total from user where age between ? and ? and sex = ?'
        reqArr = [$start, $end, $sex]
    }
    let data = await query(sql, reqArr)
    console.log(data)
    ctx.body = {
        code: data.code,
        data: {
            value: data.data[0].total,
            name: `${$start}-${$end}`
        }
    }
})
.get('/addUser', async(ctx, next) => {
    let $name = ctx.request.query.uname
    let $sex = ctx.request.query.sex
    let $age = ctx.request.query.age
    let sql = 'insert into user values(null,?, ?, ?)'
    let data = await query(sql, [$name, $age, $sex])
    ctx.body = data
})

module.exports = user