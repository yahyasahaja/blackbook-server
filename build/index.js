var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//AUTH
let authMiddleware = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    // pre define context scope
    req.state = { scope: [] };

    try {
      const authHeader = req.headers.authorization || req.headers.Authorization;

      if (authHeader && authHeader.length > 0) {
        const [scheme, token] = authHeader.split(' ');

        if (!/^Bearer$/i.test(scheme)) res.status(401).json({
          error: 'Bad token format'
        });

        const dtoken = jwt.verify(token, JWT.SECRET_KEY);

        req.state = _extends({}, req.state, dtoken);

        if (dtoken.userType === USER_TYPE.ADMIN || dtoken.userType === USER_TYPE.MEMBER) req.state.user = yield db.models.User.findById(dtoken.userId);else {
          req.state.user = {
            id: 0,
            name: USER_TYPE.USER,
            email: '',
            type: USER_TYPE.USER
          };

          req.userType = USER_TYPE.USER;
        }
      }

      yield next();
    } catch (err) {
      res.status(401).json({
        error: err.message
      });
    }
  });

  return function authMiddleware(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

//GRAPHQL


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//MODULES
import Express from 'express';
import graphqlExpress from 'express-graphql';
import jwt from 'jsonwebtoken';
// import path from 'path'
import cors from 'cors';
import compression from 'compression';
import { apolloUploadExpress } from 'apollo-upload-server';
import bodyParser from 'body-parser';

//SCHEMA_RESTAURANT
import schema from './modules/schema';

//EVENTS
import { DB_CONNECTED, events } from './events';

//DATABASE
import db from './models';

//CONFIG
import { JWT, USER_TYPE } from './config';

//INNER_CONFIG
const PORT = 5000;
let app = Express();

//PARSER
bodyParser.urlencoded({ extended: true });

//CUSTOM_CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'authorization,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//COMPRESSION
app.use(compression());app.use('/graphql', authMiddleware, bodyParser.json(), cors(), apolloUploadExpress(), graphqlExpress(req => ({
  schema,
  pretty: true,
  graphiql: true,
  context: _extends({
    JWT_SECRET_KEY: JWT.SECRET_KEY
  }, req.state)
})));

//START_SERVER 
//LISTEN TO PORT
events.on(DB_CONNECTED, () => {
  app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
});