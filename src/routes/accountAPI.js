import express from "express";
import model from "../model";

import {auth_jwt} from "../auth";

const router = express.Router();



/*
	Các bước lấy info người sử
	Quản lý thông tin người dùng trên hệ thông


*/


router.get('/fbid', function(req, res, next) {
	//Kiểm tra fbid có được liên kết với tài khoản nào hay không
	const fb_id = req.query.fbid;

	model.user.findOne({
		where:{
			fb_id:fb_id,
		}
	})
	.then((result)=>{
		if(result){
			res.status(200).json({
				is_linking:true,
				token:auth_jwt.encode({
					id:result.get("mssv"),
				})
			})
		}else{
			res.status(200).json({
				is_linking:false
			})
		}
	})
	.catch((ex)=>{
		res.status(200).json({
			err:''+ex,
			is_linking:false
		})
	})
});

module.exports = router;
