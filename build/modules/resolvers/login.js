'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../../config');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (obj, { email, password }) {
    try {
      const user = yield _models2.default.models.User.findOne({ where: { email } });
      const role = user.role;

      if (!user) throw new Error('No user matches with that email');

      if (!(yield _bcrypt2.default.compare(password, user.password))) {
        throw new Error('Invalid Password');
      }

      console.log(user.id);
      return _jsonwebtoken2.default.sign({
        scope: role === _config.USER_TYPE.ADMIN ? _config.ADMIN_SCOPE : role === _config.USER_TYPE.MEMBER ? _config.MEMBER_SCOPE : _config.USER_SCOPE,
        userId: user.id,
        userType: role
      }, _config.JWT.SECRET_KEY);
    } catch (err) {
      throw err;
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();