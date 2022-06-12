const Koa = require('koa')
const app = new Koa()
const { APP_PORT } = require('./config/config.default')
const userRouter = require('./router/user.route')

// 中间件
app
  .use((ctx, next) => {
    ctx.body = 'hello api'
    next()
  })
  // 注册路由
  .use(userRouter.routes())

app.listen(APP_PORT, () => {
  console.log(`server is running at port http://localhost:${APP_PORT}`)
})
