const Router = require('koa-router')
const query = require('./pool')
const router = new Router()

// 查询用户
router
.get('/user', async (ctx, next) => {
    console.log(query)
    ctx.cookies.set('user', 'nihao',{
        domian: '127.0.0.1',
        path: '/user',
        maxAge: 1000*60*60,
        // expires: new Date('2020-12-31'),
        httpOnly: false,
        overwrite: false
    })
    let sql = 'SELECT * FROM login'
    let data  = await query(sql)
    ctx.body = data
})

// 修改用户
router
.get('/updateUser', async(ctx, next) => {
    console.log(ctx.request.query)
    let $upwd = ctx.request.query.upwd
    let $uid = ctx.request.query.uid
    let sql = 'UPDATE login SET upwd=? where uid=?'
    let data = await query(sql, [$upwd, $uid])
    console.log(data)
    console.log(data.OkPacket)
    let res = {}
    if (data.code === 200) {
        res.code = 200
        res.msg = '修改成功'
    } else {
        res.code = 400
        res.msg = '修改失败'
    }
    ctx.body = res
})

// 增加用户
router
.get('/addUser', async(ctx) => {
    console.log(ctx.request.query)
    let $uname = ctx.request.query.uname
    let $upwd = ctx.request.query.upwd
    let sql = 'INSERT INTO login VALUES (null,?, ?)'
    let data = await query(sql, [$uname, $upwd])
    let res = {}
    if (data.code === 200) {
        res.code = 200
        res.msg = '添加成功'
    } else {
        res.code = 400
        res.msg = '添加失败'
    }
    ctx.body = res
})

//  删除用户
router
.get('/delUser', async(ctx) => {
    let $uid = ctx.request.query.uid
    if (!$uid) return
    let sql = 'DELETE  FROM login WHERE uid=?'
    let data = await query(sql, [$uid])
    let res = {}
    if (data.code === 200) {
        res.code = 200
        res.msg = '删除成功'
    } else {
        res.code = 400
        res.msg = '删除失败'
    }
    ctx.body = res
})
module.exports = router