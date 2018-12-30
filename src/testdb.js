var model = require('./model');

model.sequelize.sync({force: true}).then(() => {
//   // Table created
  
});
//model.monan.sync({force: true}).then(() => {});
//model.danhmuc.sync({force: true}).then(() => {});

// model.user.findAll().then((result)=>{
// 	console.log(result[0]);
// });

// model.danhmuc.findAll().then((result)=>{
// 	result = result.reduce((e,item)=>{
// 		e.push(item.dataValues);
// 		return e;
// 	},[]);	
// })