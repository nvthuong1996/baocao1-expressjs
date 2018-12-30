"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _qldt = require("../qldt");

var crawler = _interopRequireWildcard(_qldt);

var _model = require("../model");

var _model2 = _interopRequireDefault(_model);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cert = _fs2.default.readFileSync("./cert.key");

var router = _express2.default.Router();

/*
	Các bước lấy info người sử
	B1: Sử dụng mật khẩu get thông tin người dùng
	B2: Kiểm xem người dùng này đã từng đăng kí hay chưa
	B3: Update dữ liệu người dùng


*/

router.get('/info', function (req, res, next) {
	var userName = req.query.username;
	var passWord = req.query.password;
	if (userName == "") {
		res.json({
			"err": "Không được bỏ trống mục tài khoản"
		});
	}
	crawler.crawlerBasicInfo(userName, passWord).then(function (data) {

		data.ngay_sinh = data.ngay_sinh.split('/').reverse().join("-");
		var resData = JSON.parse(JSON.stringify(data));

		//test
		//data.khoa = "abc";

		resData["err"] = null;

		//Sinh token
		var token = _jsonwebtoken2.default.sign({ id: resData.id, ten_sv: resData.ten_sv, date: new Date().getTime() }, cert, { algorithm: 'RS256' });
		resData["token"] = token;

		/*
  * Phải tìm xem bảng user có thông tin người dùng này chưa
  * Nếu có thì cho vào trong luôn
  * Nếu chưa có thì show đăng kí
  */
		_model2.default.user.findOne({
			where: {
				mssv: data.id
			}
		}).then(function (result) {
			if (result) {
				resData["is_dk"] = true;
			} else {
				resData["is_dk"] = false;
			}

			_model2.default.qldt_account.findOne({
				where: {
					id: data.id
				}
			}).then(function (result) {
				if (result) {
					return result.update(data);
				} else {
					return _model2.default.qldt_account.create(data);
				}
			}).catch(function (ex) {
				resData["err"] = ex + "";
				res.status(200).json(resData);
			});
			res.status(200).json(resData);
		});
	}).catch(function (ex) {
		res.json({
			"err": ex + ""
		});
	});
});

module.exports = router;
//# sourceMappingURL=crawler.js.map