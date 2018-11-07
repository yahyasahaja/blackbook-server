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
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  attack: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  agility: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  speed: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  intelligence: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  armor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false,
}) 