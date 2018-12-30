"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _model = require("../model");

var _model2 = _interopRequireDefault(_model);

var _auth = require("../auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

/*
	Các bước lấy info người sử
	Quản lý thông tin người dùng trên hệ thông


*/

router.get('/fbid', function (req, res, next) {
	//Kiểm tra fbid có được liên kết với tài khoản nào hay không
	const fb_id = req.query.fbid;

	_model2.default.user.findOne({
		where: {
			fb_id: fb_id
		}
	}).then(result => {
		if (result) {
			res.status(200).json({
				is_linking: true,
				token: _auth.auth_jwt.encode({
					id: result.get("mssv")
				})
			});
		} else {
			res.status(200).json({
				is_linking: false
			});
		}
	}).catch(ex => {
		res.status(200).json({
			err: '' + ex,
			is_linking: false
		});
	});
});

module.exports = router;
//# sourceMappingURL=accountAPI.js.map