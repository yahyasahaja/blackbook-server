'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import { JWT, USER_TYPE } from '../../config'

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (obj, { heroId, comment, video_url, image_url }, { scope }) {
    if (scope.includes('addComment')) {
      try {
        let hero = yield _models2.default.models.Hero.findById(heroId);

        if (!hero) throw new Error('Hero id is not exist');

        return yield hero.addComment({ comment, video_url, image_url });
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