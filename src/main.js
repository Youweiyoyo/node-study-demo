const Koa = require('koa')

const app = new Koa()

// 中间件
app.use((ctx, next) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('server is running at port http://localhost:3000')
})
