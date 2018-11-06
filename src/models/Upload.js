import Sequelize from 'sequelize'
import connection from './connection'

export default connection.define(
  'Upload',
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    file_name: {
      type: Sequelize.STRING, 
    },
    mime_type: {
      type: Sequelize.STRING,
    },
    encoding: {
      type: Sequelize.STRING,
    },
    path: {
      type: Sequelize.STRING,
    }
  },
  {
    underscored: true,
    timestamps: false
  }
)
