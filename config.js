export const LOG_MODE = 'dev'

const test = false

let database
if (test) {
  database = {
    DATABASE_NAME: 'blackbook',
    USER: 'root',
    PASSWORD: 'yahya123',
    HOST: 'localhost',
    DIALECT: 'mysql',
    PORT: 3306,
    POOL_SIZE: 10,
  }
} else database = {
  DATABASE_NAME: 'blackbook',
  USER: 'root',
  PASSWORD: 'sansaja123',
  HOST: 'localhost',
  DIALECT: 'mysql',
  PORT: 3306,
  POOL_SIZE: 10,
}
export const DATABASE = database

export const JWT = {
  SECRET_KEY: 'iwiguhilmklmuxdepwgDota2Blackbook3528352'
}

export const USER_TYPE = {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
  USER: 'USER'
}

export const USER_SCOPE = [
  'hero',
  'allHeroes',
  'login',
  'register',
]

export const MEMBER_SCOPE = [
  'hero',
  'allHeroes',
  'login',
  'register',
  'user',
  'updateUser',
  'addComment',
  'editComment',
  'deleteComment',
]

export const ADMIN_SCOPE = [
  'hero',
  'allHeroes',
  'login',
  'register',
  'user',
  'updateUser',
  'addComment',
  'editComment',
  'deleteComment',
  'addHero',
  'editHero',
  'deleteHero',
]

export default {
  LOG_MODE,
  DATABASE,
  JWT,
  USER_TYPE,
}