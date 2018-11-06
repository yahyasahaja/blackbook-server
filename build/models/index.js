'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _events = require('../events');

var _Ability = require('./Ability');

var _Ability2 = _interopRequireDefault(_Ability);

var _Hero = require('./Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _Status = require('./Status');

var _Status2 = _interopRequireDefault(_Status);

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

require('./Upload');

var _seeders = require('../seeders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //MODULES

//CONNECTION


//MODELS


//MODEL_RELATIONS
// Customer.hasMany(Order, { foreignKey: 'customer_id' })
// Order.belongsTo(Customer, { foreignKey: 'customer_id' })
_Hero2.default.hasMany(_Ability2.default, { foreignKey: 'hero_id' });
_Ability2.default.belongsTo(_Hero2.default, { foreignKey: 'hero_id' });

_Hero2.default.hasMany(_Status2.default, { foreignKey: 'hero_id' });
_Status2.default.belongsTo(_Hero2.default, { foreignKey: 'hero_id' });

_User2.default.hasMany(_Comment2.default, { foreignKey: 'user_id' });
_Comment2.default.belongsTo(_User2.default, { foreignKey: 'user_id' });

_Hero2.default.hasMany(_Comment2.default, { foreignKey: 'hero_id' });
_Comment2.default.belongsTo(_Hero2.default, { foreignKey: 'hero_id' });

//SEEDS


//CONNECT
let force = true;

_connection2.default.sync({
  force
}).then(_asyncToGenerator(function* () {
  console.log('database synchronized');

  _events.events.emit(_events.DB_CONNECTED);
  if (force) (0, _seeders.giveSeeds)();
})).catch(err => {
  console.log(err);
});

exports.default = _connection2.default;