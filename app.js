const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
const userRoutes = require('./user')

const routerApp = new Router()
const app = new Koa()
app.use(bodyParser())

// 注册路由
routerApp.use('/user', userRoutes.routes(), userRoutes.allowedMethods())
// 将路由注册到服务器上
app.use(routerApp.routes()).use(routerApp.allowedMethods())

app.listen(3000, () => {
    console.log('nuxtDemo is starting at port 3000')
})