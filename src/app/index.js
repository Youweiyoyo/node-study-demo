// 业务层
const Koa = require('koa')
const koaBody = require('koa-body')
const userRouter = require('../router/user.route')
const app = new Koa()

// 中间件
app
  .use(koaBody())
  // 注册路由
  .use(userRouter.routes())

module.exports = app
