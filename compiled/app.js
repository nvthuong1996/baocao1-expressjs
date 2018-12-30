'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.session = exports.app = undefined;

var _httpErrors = require('http-errors');

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _global = require('./global');

var _global2 = _interopRequireDefault(_global);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _login = require('./routes/login');

var _login2 = _interopRequireDefault(_login);

var _crawlerAPI = require('./routes/crawlerAPI');

var _crawlerAPI2 = _interopRequireDefault(_crawlerAPI);

var _signupAPI = require('./routes/signupAPI');

var _signupAPI2 = _interopRequireDefault(_signupAPI);

var _accountAPI = require('./routes/accountAPI');

var _accountAPI2 = _interopRequireDefault(_accountAPI);

var _conversion = require('./routes/conversion');

var _conversion2 = _interopRequireDefault(_conversion);

var _webhooks = require('./routes/webhooks');

var _webhooks2 = _interopRequireDefault(_webhooks);

var _grouplop = require('./routes/grouplop');

var _grouplop2 = _interopRequireDefault(_grouplop);

var _auth = require('./auth');

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _test = require('./test');

var test = _interopRequireWildcard(_test);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const session = (0, _expressSession2.default)({
  secret: "secret"
});

//test

//test.setMenu();


// import thread_setting from './messenger-api-helpers/thread-setup';

// thread_setting.setDomainWhitelisting();
// thread_setting.setGetStarted();
// thread_setting.setPersistentMenu();


//model.sequelize.sync({force: true}).then(() => {
//   // Table created

//});

//import {createConversionFromMonHoc} from "./tool/updateMonHocvaTKB";


//createConversionFromMonHoc();

var app = (0, _express2.default)();

//Authenticate
app.use(session).use(_auth.auth_passport.initialize()).use(_auth.auth_passport.session());

// view engine setup
app.set('views', './views');

app.set('view engine', 'ejs');

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static('./public'));

app.use('/', _index2.default);
app.use('/login', _login2.default);
app.use('/api/qldt', _crawlerAPI2.default);
app.use('/api/signup', _signupAPI2.default);
app.use('/api/account', _accountAPI2.default);
app.use('/conversion', _conversion2.default);
app.use('/webhook', _webhooks2.default);
app.use('/grouplop', _grouplop2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors2.default)(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

exports.app = app;
exports.session = session;
//# sourceMappingURL=app.js.map