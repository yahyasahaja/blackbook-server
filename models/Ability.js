//MODULES
import Sequelize from 'sequelize'
import connection from './connection'

//USER_SCHEMA
export default connection.define('Ability', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  mana: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cooldown: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  video_url: {
    type: Sequelize.STRING,
  }
}, {
  underscored: true,
  timestamps: false,
}) 