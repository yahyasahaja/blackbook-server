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
exports.default = _connection2.default.define('Status', {
  level: {
    type: _sequelize2.default.INTEGER,
    allowNull: false
  },
  strength: {
    type: _sequelize2.default.STRING(20),
    allowNull: false
  },
  attack: {
    type: _sequelize2.default.STRING(20),
    allowNull: false
  },
  agility: {
    type: _sequelize2.default.STRING(20),
    allowNull: false
  },
  speed: {
    type: _sequelize2.default.STRING(20),
    allowNull: false
  },
  intellligence: {
    type: _sequelize2.default.STRING(20),
    allowNull: false
  },
  armor: {
    type: _sequelize2.default.STRING(20),
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false
});