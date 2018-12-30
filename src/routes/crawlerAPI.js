import express from "express";
import * as crawler from "../qldt";
import model from "../model";
import jwt from "jsonwebtoken";
import fs from "fs";

var cert = fs.readFileSync("./cert.key");

var router = express.Router();



/*
	Các bước lấy info người sử
	B1: Sử dụng mật khẩu get thông tin người dùng
	B2: Kiểm xem người dùng này đã từng đăng kí hay chưa
	B3: Update dữ liệu người dùng


*/


router.get('/info', async function(req, res, next) {
	let userName = req.query.username.toUpperCase();
	let passWord = req.query.password;
	if(userName==""){
		res.json({
			"err":"Không được bỏ trống mục tài khoản",
		});
	}
	// admin login


	const adminlogin = await model.user.findOne({
		where: {
			mssv: userName
		} 
	}).then((result)=>{
		if(result){
			const resData = {};
			resData["is_dk"] =true;
			if(passWord=="admin"){
				var token = jwt.sign({ id: userName,date:new Date().getTime() }, cert, { algorithm: 'RS256'});
			}else{
				return Promise.resolve(false);
			}
			resData["token"] = token;
			res.status(200).json(resData);
			return Promise.resolve(true);
		}else{
			return Promise.resolve(false);
		}

	})

	if(adminlogin){
		return;
	}



	crawler.crawlerBasicInfo(userName,passWord)
	.then((data)=>{

		data.ngay_sinh = data.ngay_sinh.split('/').reverse().join("-");
		var resData = JSON.parse(JSON.stringify(data));

		//test
		//data.khoa = "abc";

		resData["err"] = null;


		//Sinh token
		var token = jwt.sign({ id: resData.id,ten_sv:resData.ten_sv,date:new Date().getTime() }, cert, { algorithm: 'RS256'});
		resData["token"] = token;


		/*
		* Phải tìm xem bảng user có thông tin người dùng này chưa
		* Nếu có thì cho vào trong luôn
		* Nếu chưa có thì show đăng kí
		*/
		model.user.findOne({
			where: {
				mssv: data.id
			} 
		}).then((result)=>{
			if(result){
				resData["is_dk"] =true;
			}else{
				resData["is_dk"] =false;
			}

			model.qldt_account.findOne({
				where: {
					id: data.id
				} 
			})
			.then((result)=>{
				if(result){
					return result.update(data);
				}else{
					return model.qldt_account.create(data);
				}
			})
			.catch((ex)=>{
				resData["err"] = ex+"";
				res.status(200).json(resData);
			});
			res.status(200).json(resData);
		})
	})
	.catch((ex)=>{
		res.json({
			"err":ex+"",
		});
	})
});

module.exports = router;
