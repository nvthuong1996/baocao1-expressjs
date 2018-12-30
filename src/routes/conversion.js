import express from "express";
import {auth_passport} from "../auth";
import model from "../model";
import { start } from "repl";
import { isBuffer } from "util";
import {conversionController} from "../controller";
import {sendMessageToRoom} from "../sockets";


const router = express.Router();

/* GET home page. */


router.use((req,res,next)=>{
	if(req.isUnauthenticated()){
		return res.redirect('/login');
	}
	return next();
})


router.get("/",async (req,res,next)=>{
	const user = req.user.mssv;
	const conversion = await conversionController.loadConversionType1(user);
	return res.render('conversion',{
		conversions:conversion,
		type:1
	});

})

router.get("/group",async (req,res,next)=>{
	const user = req.user.mssv;
	const conversion = await conversionController.loadConversionType2(user);
	return res.render('conversion',{
		conversions:conversion,
		type:2
	});
})

router.get("/new",(req,res,next)=>{
    res.render('newconversion');
    
})

router.get("/:id",async (req,res,next)=>{
	
	const user = req.user.mssv;
	const conversion = await model.user_conversion.findOne({
		where:{
			user_id:user,
			conversion_id:req.params.id
		}
	})

	if(!conversion){
		return next();
	}

	/*
	*	Truy vấn cơ sở dữ liệu và render chatroom
	*
	*
	*
	*/

	const messages = await getMessage(req.params.id,user);

	res.render('chatroom',messages);



})


router.post("/send",async (req,res,next)=>{
	const nguoinhan = req.body.mssv.toUpperCase();
	const nguoigui = req.user.mssv;
	const messageSend = req.body.body;

	

	try{
		if(nguoigui==nguoinhan)
		throw new Error(`Bạn không thể gửi tin nhắn cho chính mình`);


		const user = await model.user.findOne({
			where:{
				mssv:nguoinhan
			}
		})
		if(!user){
			throw new Error(`${nguoinhan} chưa tham gia hệ thống`);
		}

		const conversion_nguoigui = await model.user_conversion.findAll({
			where:{
				user_id:nguoigui
			}
		});

		const conversion_nguoinhan =await model.user_conversion.findAll({
			where:{
				user_id:nguoinhan
			}
		});

		const conversion_id_all = checkConversion(conversion_nguoigui,conversion_nguoinhan);

		const conversion_id = await getConversion(conversion_id_all,nguoinhan,nguoigui);

		// ghi du lieu len message

		const m = {
			type:"text",
			content:messageSend
		}

		const createMessage = await model.message.create({
			creator_id:nguoigui,
			message_body:JSON.stringify(m),
			conversion_id:conversion_id
		})


		sendMessageToRoom(nguoigui,conversion_id,m);

		return res.status(200).json({
			err:null,
			id_conversion:conversion_id
		})

	}
	catch(ex){
		return res.status(200).json({
			err:''+ex
		})
	}
})


function getConversion(conversion_id,nguoinhan,nguoigui){
	/*
	*	Nhan vao conversion id va return thong tin ve conversion do
	*	Neu conversion khong co thi tao ra conversion
	*/

	if(conversion_id){
		//get conversion info

		return conversion_id.reduce((start,item)=>{
			return start.then((result)=>{
				if(result)
					return Promise.resolve(result);

				return model.conversion.findOne({
					where:{
						id:item,
					}
				})
				.then((result)=>{
					if(result.type==1){
						return Promise.resolve(result);
					}else{
						return Promise.resolve(null);
					}
				})
			})
		},Promise.resolve(null))
		.then((result)=>{
			return Promise.resolve(result.id)
		});

	}else{
		//them moi conversion giua 2 nguoi
		return model.conversion.create({
			name:null,
			is_active:1,
			type:1
		})
		.then((createConversion)=>{
			return model.user_conversion.create({
				conversion_id:createConversion.get("id"),
				user_id:nguoigui,
				is_active:1,
				access:'{"name":true}'
			})
		})
		.then((result)=>{
			return 	model.user_conversion.create({
				conversion_id:result.get("conversion_id"),
				user_id:nguoinhan,
				is_active:1,
				access:"{}"
			})
		})
		.then((result)=>{
			return Promise.resolve(result.get("conversion_id"));
		});
	}
}

function checkConversion(con_a,con_b){

	let result = [];
	if(!con_a||!con_b)
		return null;
	for(let i of con_a){
		for(let j of con_b){
			if(i.conversion_id==j.conversion_id){
				result = result.concat(i.conversion_id);
			}
		}
	}
	if(result.length!=0){
		return result;
	}
	return null;
}


async function getMessage (conversion_id,user){

	const conversion = await model.conversion.findOne({
		where:{
			id:conversion_id
		}
	});


	const _messages = await model.message.findAll({
		where:{
			conversion_id:conversion_id,
		},
		order: [['updatedAt', 'DESC']],
		limit:10
	});

	const messages = _messages.reverse();

	if(messages.length!=0){
		messages[messages.length-1].update({
			is_reader:1
		});
	}

 

	let result = [];
	let name_conversion = conversion.name;

	if(conversion.type==1){
		// xu ly kieu chat 1-1 ẩn danh
		const user_conversion = await model.user_conversion.findAll({
			where:{
				conversion_id:conversion_id
			}
		});

		const friend_conversion = user_conversion.filter((item)=>item.user_id!=user)[0];
		const you_conversion = user_conversion.filter((item)=>item.user_id==user)[0];
		
		const friend_info = await getFullInfoUser(friend_conversion.user_id);
		const you_info = await getFullInfoUser(you_conversion.user_id);
	
	
		const usermap = {};
		usermap[user] = you_info;
		usermap[friend_conversion.user_id] = friend_info;

		const access_friend = JSON.parse(friend_conversion.access);
		const access_you = JSON.parse(you_conversion.access);

		if(access_you.name){
			name_conversion = friend_info.qldt_account.ten_sv;
		}else{
			name_conversion = friend_info.user.nick_name;
		}


		// Dua vao access get thong tin nguoi dung
		
		
		for(let message of messages){
			const obj = usermap[message.creator_id];

			const _tmp = JSON.parse(message.message_body);

			const time_createAt = message.createdAt.toLocaleString("vi-VN");


			if(obj.user.mssv==you_conversion.user_id){
				// tin nhan you gui
				/*
				*	Kiem tra xem nguoi kia co duoc xem ten ban hay khong
				*
				*
				*/

				if(access_friend.name){
					result = result.concat({
						name:obj.qldt_account.ten_sv,
						content:_tmp.content,
						type:_tmp.type,
						time:time_createAt,
						avatar:"",
						
					})
				}else{
					result = result.concat({
						name:obj.user.nick_name,
						content:_tmp.content,
						type:_tmp.type,
						time:time_createAt,
						avatar:""
					})
				}
			}else{
				// tin nhan friend gui
				if(access_you.name){
					result = result.concat({
						name:obj.qldt_account.ten_sv,
						content:_tmp.content,
						type:_tmp.type,
						time:time_createAt,
						avatar:""
					})
				}else{
					result = result.concat({
						name:obj.user.nick_name,
						content:_tmp.content,
						type:_tmp.type,
						time:time_createAt,
						avatar:""
					})
				}
			}
			
		}

	}else if(conversion.type==2){
		// xu ly kieu chat group
		for(const item of messages){
			// Xem nguoi tao ra no la ai
			let creator = await getFullInfoUser(item.creator_id);
			const _tmp = JSON.parse(item.message_body);
			const time_createAt = item.createdAt.toLocaleString("vi-VN");

			result = result.concat({
				name:creator.qldt_account.ten_sv,
				content:_tmp.content,
				type:_tmp.type,
				time:time_createAt,
				avatar:"",
			})
		}
	}

	return {
		type:conversion.type,
		name:name_conversion,
		messages:result,
		conversion_id:conversion_id,
		user:user
	};
}


function getFullInfoUser(id){
	return model.user.findOne({
		where:{
			mssv:id
		}
	})
	.then((result1)=>{
		return model.fb_account.findOne({
			where:{
				id:result1.get("fb_id")
			}
		}).then((result2)=>{
			if(result2){
				return Promise.resolve({
					user:result1.get({plain:true}),
					fb_account:result2.get({plain:true})
				})
			}else{
				return Promise.resolve({
					user:result1.get({plain:true}),
					fb_account:null
				})
			}
		});
	})
	.then((result)=>{
		return model.qldt_account.findOne({
			where:{
				id:result.user.mssv
			}
		}).then((result1)=>{
			if(result1){
				result["qldt_account"] = result1.get({plain:true});
				return Promise.resolve(result);
			}else{
				result["qldt_account"] = null;
				return Promise.resolve(result);
			}
		});
	})
}


module.exports = router;
