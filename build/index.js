'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _events = require('./events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//DATABASE
// import db from './models'


//INNER_CONFIG
const PORT = 5000;
//EVENTS
//MODULES

let app = (0, _express2.default)();
app.use(_express2.default.static(_path2.default.resolve('./src/public')));

//START_SERVER 
//LISTEN TO PORT
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));