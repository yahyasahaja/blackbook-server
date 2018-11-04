//MODULES
import Sequelize from 'sequelize'
import connection from './connection'

//USER_SCHEMA
export default connection.define('User', {
  name: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(128),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(128),
    allowNull: false,
  },
  profpic_url: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.ENUM('ADMIN', 'MEMBER'),
    allowNull: false,
  }
}, {
  underscored: true,
  timestamps: false,
}) 