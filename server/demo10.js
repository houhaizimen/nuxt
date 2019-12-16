const Koa = require('koa')
const app = new Koa()
// ctx 上下文对象
app.use(async(ctx) => {
  ctx.cookies.set('myname','jspang', {
    domain: '127.0.0.1',
    path: '/index',
    maxAge: 1000*60*60, // cookies 有效时间 
    expires: new Date('2020-12-31'),
    httpOnly: false,
    overwrite: false 
    })
})
app.listen(3000, () => {
    console.log('server is starting at port 3000')
})