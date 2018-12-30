"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _model = require("../model");

var _model2 = _interopRequireDefault(_model);

var _auth = require("../auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
	Bước 1:
*/
router.get('/', function (req, res, next) {
	var _req$query = req.query,
	    nickname = _req$query.nickname,
	    fbid = _req$query.fbid,
	    token = _req$query.token;


	if (!/[a-zA-Z]{4,}[^#&<>\"~;$^%{}?]{1,20}$/.test(nickname)) {
		return res.status(200).json({
			err: "Nick name không hợp lệ. Nick name nên có từ 4 kí tự và bắt đầu bằng chữ"
		});
	}

	_auth.auth_jwt.decode(token).then(function (decoded) {
		var id = decoded.id,
		    ten_sv = decoded.ten_sv,
		    date = decoded.date;


		if (new Date().getTime() - date > 15 * 60 * 1000) {
			return res.status(200).json({
				err: "Token đã hết hạn. Vui lòng login lại"
			});
		}
		// Check nickname,fb_id
		console.log("1");
		return _model2.default.user.findOne({
			where: {
				mssv: id
			}
		}).then(function (result) {
			if (result) {
				return Promise.reject("Tài khoản đã được tạo");
			} else {
				return _model2.default.user.findOne({
					where: {
						nick_name: nickname
					}
				}).then(function (result) {
					if (result) {
						return Promise.reject("Nick name của bạn bị trùng");
					} else {
						return _model2.default.user.create({
							mssv: id,
							is_active: 'A',
							nick_name: nickname
						}).then(function () {
							var token_login = _auth.auth_jwt.encode({
								id: id,
								ten_sv: ten_sv,
								date: new Date().getTime()
							});
							return res.status(200).send({
								err: null,
								token: token_login
							});
						});
					}
				});
			}
		});
	}).catch(function (ex) {
		return res.status(200).json({
			err: ex + ""
		});
	});
});

module.exports = router;
//# sourceMappingURL=signup.js.map