"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encode = exports.decode = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cert_public = _fs2.default.readFileSync("./cert.pub");
var cert_private = _fs2.default.readFileSync("./cert.key");

exports.decode = decode;
exports.encode = encode;


function decode(token) {
    return new Promise((resolve, reject) => {
        _jsonwebtoken2.default.verify(token, cert_public, function (err, decoded) {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
}

function encode(obj) {
    var token = _jsonwebtoken2.default.sign(obj, cert_private, { algorithm: 'RS256' });
    return token;
}
//# sourceMappingURL=m_jwt.js.map