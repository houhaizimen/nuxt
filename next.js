// 创建路由实例
const next = new require('koa-router')()
next.get('/', (ctx, next) => {
    ctx.body = 'next'
})
module.exports = next