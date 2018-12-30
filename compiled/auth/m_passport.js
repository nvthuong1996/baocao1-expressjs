'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

var _m_jwt = require('./m_jwt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LocalStrategy = _passportLocal2.default.Strategy;

_passport2.default.use(new LocalStrategy((username, password, done) => {
    //check fbid
    let fbid = username;
    let token = password;

    (0, _m_jwt.decode)(token).then(result => {
        if (new Date().getTime() - result.date > 30 * 1000) {
            return Promise.reject("Token hết hạn");
        }
        return _model2.default.user.findOne({
            where: {
                mssv: result.id
            }
        });
    }).then(result => {
        if (!result) {
            return Promise.reject("Lỗi logic chương trình");
        } else {
            return result.update({
                fb_id: fbid
            }).then(() => {
                return done(null, {
                    id: result.get("mssv")
                });
            });
        }
    }).catch(ex => {
        return done(null, false);
    });
}));

_passport2.default.serializeUser((user, done) => {
    done(null, user.id);
});

_passport2.default.deserializeUser((user, done) => {
    _model2.default.user.findOne({
        where: {
            mssv: user
        }
    }).then(result => {
        if (result) {
            done(null, result.get({ plain: true }));
        } else {
            done(null, false);
        }
    });
});

exports.default = _passport2.default;
//# sourceMappingURL=m_passport.js.map