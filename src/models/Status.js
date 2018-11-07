//MODULES
import Sequelize from 'sequelize'
import connection from './connection'

//USER_SCHEMA
export default connection.define('Status', {
  level: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  strength: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  attack: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  agility: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  speed: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  intelligence: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  armor: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false,
}) 