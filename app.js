const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
const userRoutes = require('./user')
const nextRoutes = require('./next')

const routerApp = new Router()
const app = new Koa()
    // 使用中间件
app.use(bodyParser())
console.log('111111111111')
    // app.use(async(ctx, next) => {
    //     console.log(22222222222)
    //     console.log(Date.now())
    //         // await next()
    // })
    // app.use(async(ctx, next) => {
    //     console.log(Date.now())
    //         // await next()
    // })
    // app.use(async(ctx, next) => {
    //     console.log(Date.now())
    //         // console.log('ending---------------------')
    // })

// 注册路由
routerApp.use('/user', userRoutes.routes(), userRoutes.allowedMethods())
routerApp.use('/next', nextRoutes.routes(), nextRoutes.allowedMethods())
    // 将路由注册到服务器上---启动路由
app.use(routerApp.routes()).use(routerApp.allowedMethods())

app.listen(3002, () => {
    console.log('nuxtDemo is starting at port 3002')
})