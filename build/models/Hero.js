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
exports.default = _connection2.default.define('Hero', {
  name: {
    type: _sequelize2.default.STRING(64),
    allowNull: false
  },
  image_url: {
    type: _sequelize2.default.STRING
  },
  bio: {
    type: _sequelize2.default.TEXT
  },
  tips_desc: {
    type: _sequelize2.default.STRING
  },
  tips_video_url: {
    type: _sequelize2.default.STRING
  }
}, {
  underscored: true,
  timestamps: false
});