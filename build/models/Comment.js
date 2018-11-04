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
exports.default = _connection2.default.define('Comment', {
  comment: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  video_url: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  image_url: {
    type: _sequelize2.default.STRING,
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false
});