const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
    ctx.body = 'hellow world'
})
app.listen(3000)
console.log('app is starting at 3000')