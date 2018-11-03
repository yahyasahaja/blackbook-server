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
    type: Sequelize.STRING,
    allowNull: false,
  },
  mana: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cooldown: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  underscored: true,
  timestamps: false,
}) 