// 业务层
const Koa = require('koa')
const userRouter = require('../router/user.route')
const app = new Koa()

// 中间件
app
  .use((ctx, next) => {
    ctx.body = 'hello api'
    next()
  })
  // 注册路由
  .use(userRouter.routes())

module.exports = app
