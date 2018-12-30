"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.crawlerBasicInfo = undefined;

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _header = require("../../header.json");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*	Bao gồm crawler thông tin cơ bản và crawler điểm thi
*
*/

exports.crawlerBasicInfo = crawlerBasicInfo;


function crawlerBasicInfo(cookie) {
	return new Promise((resolve, reject) => {
		var header = JSON.parse(JSON.stringify(_header2.default));
		header["Cookie"] = cookie;
		(0, _request2.default)({
			method: "GET",
			uri: "http://qldt.ptit.edu.vn/Default.aspx?page=xemdiemthi",
			headers: header
		}, (err, res, body) => {
			if (err || res.statusCode != 200) {
				return reject("Có lỗi khi crawler thông tin cơ bản");
			}
			var regex = new RegExp(`Chào(.*?)\\)`, 'g');
			var match = regex.exec(body);
			if (!match) {
				return reject("Lỗi chưa login khi crawler thông tin cơ bản");
			}

			var mssv = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblMaSinhVien", body);
			var ten_sv = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblTenSinhVien", body);
			var gioi_tinh = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblPhai", body);
			var ngay_sinh = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblNgaySinh", body);
			var noi_sinh = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblNoiSinh", body);
			var lop = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblLop", body);
			var nganh = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lbNganh", body);
			var khoa = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblKhoa", body);
			var he_dao_tao = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblHeDaoTao", body);
			var khoa_hoc = matchIDtagSpan("ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblKhoaHoc", body);

			return resolve({
				id: mssv,
				ten_sv: ten_sv,
				gioi_tinh: gioi_tinh,
				ngay_sinh: ngay_sinh,
				noi_sinh: noi_sinh,
				lop: lop,
				nganh: nganh,
				he_dao_tao: he_dao_tao,
				khoa_hoc: khoa_hoc,
				khoa: khoa
			});
		});
	});
}

function matchIDtagSpan(id, body) {
	var regex = new RegExp(`<([^\\s]+).*?id="${id}".*?>(.+?)</span>`);
	var match = regex.exec(body);
	if (match) {
		return match[2];
	} else {
		return null;
	}
}
//# sourceMappingURL=crawler.js.map