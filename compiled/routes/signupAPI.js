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
	let { nickname, fbid, token } = req.query;

	nickname = nickname.trim();
	let _tt = nickname.replace(/ /g, '');
	if (_tt.length < 4 || nickname.length > 25) {
		return res.status(200).json({
			err: "Nick name không hợp lệ. Nick name nên có từ 4 kí tự và bắt đầu bằng chữ"
		});
	}

	_auth.auth_jwt.decode(token).then(decoded => {
		let { id, ten_sv, date } = decoded;

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
		}).then(result => {
			if (result) {
				return Promise.reject("Tài khoản đã được tạo");
			} else {
				return _model2.default.user.findOne({
					where: {
						nick_name: nickname
					}
				}).then(result => {
					if (result) {
						return Promise.reject("Nick name của bạn bị trùng");
					} else {
						return _model2.default.user.create({
							mssv: id,
							is_active: 1,
							nick_name: nickname
						}).then(account => {
							// Thêm user vào conversion nhóm

							addAccountToGroupConversion(account.mssv);

							var token_login = _auth.auth_jwt.encode({
								id: id,
								ten_sv: ten_sv,
								type: "login",
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
	}).catch(ex => {
		return res.status(200).json({
			err: ex + ""
		});
	});
});

async function addAccountToGroupConversion(mssv) {
	let mdks = await _model2.default.dkmh.findAll({
		where: {
			mssv: mssv
		}
	});

	for (let item of mdks) {
		let monhoc = await _model2.default.monhoc.findOne({
			where: {
				mdk: item.mdk
			}
		});

		let conversion = await _model2.default.user_conversion.findOne({
			where: {
				user_id: mssv,
				conversion_id: monhoc.conversion_id
			}
		});

		if (!conversion) {
			await _model2.default.user_conversion.create({
				user_id: mssv,
				conversion_id: monhoc.conversion_id,
				is_active: 1,
				access: JSON.stringify({ name: true, avatar: true })
			});
		} else {
			conversion.update({
				user_id: mssv,
				conversion_id: monhoc.conversion_id,
				is_active: 1,
				access: JSON.stringify({ name: true, avatar: true })
			});
		}
	}
}

module.exports = router;
//# sourceMappingURL=signupAPI.js.map