class UserService {
  async createUser(user_name, password) {
    // 写入数据库
    return 'success'
  }
}

module.exports = new UserService()
