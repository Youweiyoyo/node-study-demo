const User = require('../model/user.model')
class UserService {
  async createUser(user_name, password) {
    // 写入数据库
    // 返回的是 promise的值
    const res = await User.create({
      // 表的字段
      user_name,
      password,
    })
    return res
  }
}

module.exports = new UserService()
