const Koa = require("koa")
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use(async(ctx) => {
    if (ctx.method === 'GET' && ctx.url==='/') {
        // 显示表单页
        let html = `
            <h1>chengfang request Post</h2>
            <form action="/" method="POST">
                <p>姓名</p>
                <input name='username'> </br>
                <p>年龄</p>
                <input name='age'> </br>
                <button type='submit'>submit</button>
            </form>
        `
        ctx.body = html
    } else if (ctx.method === 'POST' && ctx.url==='/') {
        let postData = ctx.request.body
        ctx.body = postData
    } else {
        ctx.body='<h1>404</h1>'
    }
})

app.listen(3000, () => {
    console.log('server is starting')
})