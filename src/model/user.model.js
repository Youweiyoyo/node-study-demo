const { DataTypes } = require('sequelize')
const sequelize = require('../db/seq')

const User = sequelize.define('Api_user', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码',
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否是管理员, 0: 否（默认）, 1: 是',
  },
})
// 强制同步数据库：强制创建数据新表
// User.sync({ force: true })

module.exports = User
