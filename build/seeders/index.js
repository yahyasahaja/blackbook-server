'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.giveSeeds = undefined;

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _connection = require('../models/connection');

var _connection2 = _interopRequireDefault(_connection);

var _statuses = require('./statuses.js');

var _statuses2 = _interopRequireDefault(_statuses);

var _heroes = require('./heroes.js');

var _heroes2 = _interopRequireDefault(_heroes);

var _users = require('./users.js');

var _users2 = _interopRequireDefault(_users);

var _abilities = require('./abilities.js');

var _abilities2 = _interopRequireDefault(_abilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //MODULES


//DATABASE
// import db from '../db'

//MODELS


const {
  Hero,
  Ability,
  Status,
  User
} = _connection2.default.models;

//SEEDS


//SEEDERS
const giveSeeds = exports.giveSeeds = (() => {
  var _ref = _asyncToGenerator(function* () {
    //HEROES
    yield Hero.destroy({ where: {}, force: true });
    yield Hero.bulkCreate(_heroes2.default);

    //ABILITIES
    yield Ability.destroy({ where: {}, force: true });
    yield Ability.bulkCreate(_abilities2.default);

    //STATUSES
    yield Status.destroy({ where: {}, force: true });
    yield Status.bulkCreate(_statuses2.default);

    //USER
    yield User.destroy({ where: {}, force: true });
    for (let user of _users2.default) user.password = yield _bcrypt2.default.hash(user.password, 12);
    yield User.bulkCreate(_users2.default);

    // let loc
    // let hero = await Hero.create({
    //   name: 'SOmething',
    //   image: 'ogehuw',
    //   bio: 'ogehuw',
    //   tips_desc: 'ogehuw',
    //   tips_video_url: 'ogehuw',
    // })
    // await hero.destroy()
    // for (let i in hero) if (i.indexOf('remove') != -1) console.log(i, hero[i].toString())
  });

  return function giveSeeds() {
    return _ref.apply(this, arguments);
  };
})();

exports.default = {
  giveSeeds
};