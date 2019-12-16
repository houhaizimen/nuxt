// 引入插件
const Koa = require('koa')
const router = require('./test.js')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')

// 初始化数据
const app = new Koa()

// 使用第三方插件
// post请求
app.use(bodyParser())
// 静态文件
app.use(static(path.join(__dirname, './static')))  // ctx.render
// 解决跨域
// app.use(async (ctx, next) => {
//     ctx.set('Access-Control-Allow-Origin', '*')
//     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
//     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
// })

app.listen(3000, () => {
    console.log('testApp server is starting')
})

app.use(router.routes()).use(router.allowedMethods())