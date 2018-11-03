//MODULES
import Sequelize from 'sequelize'
import connection from './connection'

//USER_SCHEMA
export default connection.define('Hero', {
  name: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.STRING,
  },
  tips_desc: {
    type: Sequelize.STRING,
  },
  tips_video_url: {
    type: Sequelize.STRING,
  }
}, {
  underscored: true,
  timestamps: false,
}) 