import request from "request";
import HEADER from "../../header.json";

var abc = (user,pass) => {
	return requestHome()
	.then((data)=>{
		return requestLogin(user,pass,data);
	})
}

export default abc;


function requestLogin(user,pass,data){
	return new Promise((resolve,reject)=>{
		var cookie = data.cookie;
		var form = data.form;
		form["ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$txtTaiKhoa"] = user;
		form["ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$txtMatKhau"] = pass;
		form["ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$btnDangNhap"] = "Đăng nhập";

		var header = JSON.parse(JSON.stringify(HEADER));
		header["Cookie"] = cookie;
		header["Content-Type"] = "application/x-www-form-urlencoded";

		request({
			method:'POST',
			uri:'http://qldt.ptit.edu.vn/default.aspx',
			headers:header,
			form:form,
			followAllRedirects: true
		},(err,res,body)=>{
			if(err||res.statusCode!=200){
				return reject("Lỗi khi thực hiện login. Vui lòng thử lại");
			}
			var regex = new RegExp(`Chào(.*?)\\)`,'g');
			var match=regex.exec(body);
			if(match){
				var name = match[1].trim().split('(')[0].trim();
				var mssv = match[1].trim().split('(')[1];;
			}else{
				if(body.indexOf("Sai thông tin đăng nhập")>=0){
					return reject("Sai thông tin tài khoản.");
				}else{
					return reject("Lỗi. Có thể regex không khớp được thông tin người dùng.");
				}
				
			}
			return resolve({
				name:name,
				mssv:mssv,
				cookie:cookie
			});
		})
	})
}


function requestHome(cookie){
	return new Promise((resolve,reject)=>{
		request({
			method:'GET',
			uri:'http://qldt.ptit.edu.vn/',
			headers:HEADER
		},(err,res,body)=>{
			if(err||res.statusCode!=200){
				return reject("Lỗi khi request Home");
			}
			var _cookie='';
			if(res.headers['set-cookie']){
				let i=0;
				res.headers['set-cookie'].map((e)=>{
					i++;
					_cookie+=e.split(';')[0];
					if(i<res.headers['set-cookie'].length){
						_cookie += '; '
					}
				})
			}else{
				return reject("Không có cookie");
			}
			var state = /__VIEWSTATE.+?value=\"(.+?)\"/.exec(body);
			if(state){
				state = state[1];
			}
			var gen = /__VIEWSTATEGENERATOR.+?value=\"(.+?)\"/.exec(body);
			if(gen){
				gen = gen[1];
			}
			var form ={
				"__EVENTTARGET":"",
				"__EVENTARGUMENT":"",
				"__VIEWSTATE":state,
				"__VIEWSTATEGENERATOR":gen,
			}
			return resolve({
				cookie:_cookie,
				form:form
			})
		})
	})

}