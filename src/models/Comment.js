//MODULES
import Sequelize from 'sequelize'
import connection from './connection'

//USER_SCHEMA
export default connection.define('Comment', {
  comment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  video_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false,
}) 