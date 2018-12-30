import express from "express";
import model from "../model";
import {auth_jwt} from "../auth";

var router = express.Router();

/*
	Bước 1:
*/
router.get('/', function(req, res, next) {
	let {nickname,fbid,token} = req.query;
	

	nickname = nickname.trim();
	let _tt = nickname.replace(/ /g,'');
	if(_tt.length<4||nickname.length>25){
		return res.status(200).json({
			err:"Nick name không hợp lệ. Nick name nên có từ 4 kí tự và bắt đầu bằng chữ",
		})
	}

	auth_jwt.decode(token)
	.then((decoded)=>{
		let {id,ten_sv,date} = decoded;
		
		if(new Date().getTime() - date > 15*60*1000){
			return res.status(200).json({
				err:"Token đã hết hạn. Vui lòng login lại",
			});
		}
		// Check nickname,fb_id
		console.log("1");
		return model.user.findOne({
			where:{
				mssv:id
			}
		})
		.then((result)=>{
			if(result){
				return Promise.reject("Tài khoản đã được tạo");
			}else{
				return model.user.findOne({
					where:{
						nick_name:nickname
					}
				})
				.then((result)=>{
					if(result){
						return Promise.reject("Nick name của bạn bị trùng");
					}else{
						return model.user.create({
							mssv:id,
							is_active:1,
							nick_name:nickname,
						}).then((account)=>{
							// Thêm user vào conversion nhóm

							addAccountToGroupConversion(account.mssv);

							var token_login = auth_jwt.encode({
								id: id,
								ten_sv:ten_sv,
								type:"login",
								date:new Date().getTime() 
							});

							return res.status(200).send({
								err:null,
								token:token_login
							})
						});
					}
				})
			}
		})
	})
	.catch((ex)=>{
		return res.status(200).json({
			err:ex+"",
		})
	})
});



async function addAccountToGroupConversion(mssv){
	let mdks = await model.dkmh.findAll({
		where:{
			mssv:mssv
		}
	});

	for(let item of mdks){
		let monhoc = await model.monhoc.findOne({
			where:{
				mdk:item.mdk,
			}
		})

		let conversion =await model.user_conversion.findOne({
			where:{
				user_id:mssv,
				conversion_id:monhoc.conversion_id
			}
		})

		if(!conversion){
			await model.user_conversion.create({
				user_id:mssv,
				conversion_id:monhoc.conversion_id,
				is_active:1,
				access:JSON.stringify({name:true,avatar:true})
			})
		}else{
			conversion.update({
				user_id:mssv,
				conversion_id:monhoc.conversion_id,
				is_active:1,
				access:JSON.stringify({name:true,avatar:true})
			})
		}
	}

	
}

module.exports = router;
