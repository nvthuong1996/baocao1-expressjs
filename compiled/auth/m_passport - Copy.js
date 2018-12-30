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

var LocalStrategy = _passportLocal2.default.Strategy;

_passport2.default.use(new LocalStrategy(function (username, password, done) {
    console.log("Dang vao");
    _model2.default.user.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(function (result) {
        if (!result) {
            return done(null, false);
        } else {
            return done(null, result.get({ plain: true }));
        }
    }).catch(function (ex) {
        return done(null, false);
    });
}));

_passport2.default.serializeUser(function (user, done) {
    done(null, user.username);
});

_passport2.default.deserializeUser(function (username, done) {
    _model2.default.user.findOne({
        where: {
            username: username
        }
    }).then(function (result) {
        if (result) {
            done(null, result.get({ plain: true }));
        } else {
            done(null, false);
        }
    });
});

exports.default = _passport2.default;
//# sourceMappingURL=m_passport - Copy.js.map