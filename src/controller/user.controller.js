class UserController {
  async register(ctx, next) {
    console.log(ctx.request.body)
    // 1. 获取数据
    // 2. 操作数据库
    // 3. 返回结果
    ctx.body = ctx.request.body
  }
  async login(ctx, next) {
    ctx.body = '登录成功'
  }
}

module.exports = new UserController()
