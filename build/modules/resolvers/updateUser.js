'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // import db from '../../models'


exports.default = (() => {
  var _ref = _asyncToGenerator(function* (obj, {
    email,
    name,
    currentPassword,
    newPassword,
    profpic_url
  }, {
    scope,
    user
  }) {
    if (scope.includes('updateUser')) {
      try {
        if (currentPassword && !(yield _bcrypt2.default.compare(currentPassword, user.password))) {
          throw new Error('Invalid Password');
        }

        let input = { email, name, password: newPassword && (yield _bcrypt2.default.hash(newPassword, 12)), profpic_url };
        for (let key in input) if (input[key]) user[key] = input[key];

        return yield user.save();
      } catch (error) {
        throw error;
      }
    } else {
      throw new Error('Permission Denied');
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();