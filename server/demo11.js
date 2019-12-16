const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// path.join将文件目录与view拼接
app.use(views(path.join(__dirname,  './views'), {
    extension: 'ejs'
}))

// ctx 上下文对象
app.use(async(ctx) => {
    console.log(__dirname)
    await ctx.render('index', {title: '你好'})
})
app.listen(3000, () => {
    console.log('server is starting at port 3000')
})