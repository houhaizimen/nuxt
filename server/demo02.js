const Koa = require('koa')
const app = new Koa()
// ctx 上下文对象
app.use(async(ctx) => {
    let url = ctx.url
    // 从request中获取请求
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
    // query 将参数变为对象
    // req_querystring 将参数变为对象
    // 从上下文中获取请求
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})
app.listen(3000, () => {
    console.log('server is starting at port 3000')
})