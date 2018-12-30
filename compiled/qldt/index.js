"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.crawlerBasicInfo = undefined;

var _login = require("./login");

var _login2 = _interopRequireDefault(_login);

var _crawler = require("./crawler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//crawlerBasicInfo("b14dccn762","thinhthuongyen");

exports.crawlerBasicInfo = crawlerBasicInfo;


function crawlerBasicInfo(user, pass) {
	return (0, _login2.default)(user, pass).then(data => {
		return (0, _crawler.crawlerBasicInfo)(data.cookie);
	});
}
//# sourceMappingURL=index.js.map