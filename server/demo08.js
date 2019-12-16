const Koa = require('koa')
const app = new Koa()
const Router = require ('koa-router')

const home = new Router()
home.get('/index', (ctx, next) => {
    ctx.body = 'index page'
})
.get('/todo', (ctx, next) => {
    ctx.body = 'todo page'
})

const router = new Router()
router.use('/home',home.routes(), home.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log('server is starting at port 3000')
})