const Koa = require('koa')
const { APP_PORT } = require('./config/config.default')
const app = new Koa()

// 中间件
app.use((ctx, next) => {
  ctx.body = 'hello api'
})

app.listen(APP_PORT, () => {
  console.log(`server is running at port http://localhost:${APP_PORT}`)
})
