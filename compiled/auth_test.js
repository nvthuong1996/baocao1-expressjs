'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LocalStrategy = _passportLocal2.default.Strategy;

_passport2.default.use(new LocalStrategy((username, password, done) => {
    debugger;
    console.log("Dang vao roi");
    return done(null, false);
}));

exports.default = _passport2.default;
//# sourceMappingURL=auth_test.js.map