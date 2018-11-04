'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const LOG_MODE = exports.LOG_MODE = 'dev';

const test = process.env.NODE_ENV === 'development';

let database;
if (test) {
  database = {
    DATABASE_NAME: 'blackbook',
    USER: 'root',
    PASSWORD: 'yahya123',
    HOST: 'localhost',
    DIALECT: 'mysql',
    PORT: 3306,
    POOL_SIZE: 10
  };
} else database = {
  DATABASE_NAME: 'blackbook',
  USER: 'root',
  PASSWORD: 'sansaja123',
  HOST: 'localhost',
  DIALECT: 'mysql',
  PORT: 3306,
  POOL_SIZE: 10
};
const DATABASE = exports.DATABASE = database;

const JWT = exports.JWT = {
  SECRET_KEY: 'iwiguhilmklmuxdepwgDota2Blackbook3528352'
};

const USER_TYPE = exports.USER_TYPE = {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

const USER_SCOPE = exports.USER_SCOPE = ['hero', 'allHeroes', 'login', 'register'];

const MEMBER_SCOPE = exports.MEMBER_SCOPE = ['hero', 'allHeroes', 'login', 'register', 'user', 'updateUser', 'addComment', 'editComment', 'deleteComment'];

const ADMIN_SCOPE = exports.ADMIN_SCOPE = ['hero', 'allHeroes', 'login', 'register', 'user', 'updateUser', 'addComment', 'editComment', 'deleteComment', 'addHero', 'editHero', 'deleteHero'];

exports.default = {
  LOG_MODE,
  DATABASE,
  JWT,
  USER_TYPE
};