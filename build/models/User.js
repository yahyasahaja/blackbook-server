'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//USER_SCHEMA
//MODULES
exports.default = _connection2.default.define('User', {
  name: {
    type: _sequelize2.default.STRING(64),
    allowNull: false
  },
  email: {
    type: _sequelize2.default.STRING(128),
    allowNull: false,
    unique: true
  },
  password: {
    type: _sequelize2.default.TEXT,
    allowNull: false
  },
  profpic_url: {
    type: _sequelize2.default.STRING
  },
  role: {
    type: _sequelize2.default.ENUM('ADMIN', 'MEMBER'),
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false
});