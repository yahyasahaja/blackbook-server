'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloUploadServer = require('apollo-upload-server');

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _updateUser = require('./updateUser');

var _updateUser2 = _interopRequireDefault(_updateUser);

var _singleUpload = require('./singleUpload');

var _singleUpload2 = _interopRequireDefault(_singleUpload);

var _multipleUpload = require('./multipleUpload');

var _multipleUpload2 = _interopRequireDefault(_multipleUpload);

var _addComment = require('./addComment');

var _addComment2 = _interopRequireDefault(_addComment);

var _updateComment = require('./updateComment');

var _updateComment2 = _interopRequireDefault(_updateComment);

var _deleteComment = require('./deleteComment');

var _deleteComment2 = _interopRequireDefault(_deleteComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//MODELS


exports.default = {
  Upload: _apolloUploadServer.GraphQLUpload,
  Hero: {
    abilities: (() => {
      var _ref = _asyncToGenerator(function* (hero) {
        return yield hero.getAbilities();
      });

      return function abilities(_x) {
        return _ref.apply(this, arguments);
      };
    })(),
    statuses: (() => {
      var _ref2 = _asyncToGenerator(function* (hero) {
        return yield hero.getStatuses();
      });

      return function statuses(_x2) {
        return _ref2.apply(this, arguments);
      };
    })(),
    comments: (() => {
      var _ref3 = _asyncToGenerator(function* (hero) {
        return yield hero.getComments();
      });

      return function comments(_x3) {
        return _ref3.apply(this, arguments);
      };
    })()
  },
  Comment: {
    user: (() => {
      var _ref4 = _asyncToGenerator(function* (comment) {
        return yield comment.getUser();
      });

      return function user(_x4) {
        return _ref4.apply(this, arguments);
      };
    })()
  },
  //for (let i in restaurant) if (i.indexOf('get') != -1) console.log(i)
  Query: {
    user: _user2.default,
    hero: (_, { id }) => _models2.default.models.Hero.findById(id),
    allHeroes: () => _models2.default.models.Hero.findAll(),
    uploads: () => _models2.default.models.Upload.findAll()
  },
  Mutation: {
    login: _login2.default,
    register: _register2.default,
    updateUser: _updateUser2.default,
    addComment: _addComment2.default,
    updateComment: _updateComment2.default,
    deleteComment: _deleteComment2.default,
    multipleUpload: _multipleUpload2.default,
    singleUpload: _singleUpload2.default
  }
};