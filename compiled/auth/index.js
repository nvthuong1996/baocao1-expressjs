"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.auth_passport = exports.auth_jwt = undefined;

var _m_jwt = require("./m_jwt");

var auth_jwt = _interopRequireWildcard(_m_jwt);

var _m_passport = require("./m_passport");

var _m_passport2 = _interopRequireDefault(_m_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.auth_jwt = auth_jwt;
exports.auth_passport = _m_passport2.default;
//# sourceMappingURL=index.js.map