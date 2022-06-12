const Router = require('koa-router')

const router = new Router({ prefix: '/user' })

router.get('/', (ctx, next) => {
  ctx.body = 'hello get method'
})

module.exports = router
