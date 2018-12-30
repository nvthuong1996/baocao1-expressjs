"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sendMessageToRoom = exports.attachSockets = undefined;

var _model = require("../model");

var _model2 = _interopRequireDefault(_model);

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Op = _sequelize2.default.Op;
let ioSocket;

var attachSockets = io => {
	ioSocket = io;
	io.on("connection", async socket => {

		const user = socket.handshake.session.passport ? socket.handshake.session.passport.user : null;

		if (!user) {
			return socket.disconnect();
		}

		//Nếu có conversion_id thì join group chat

		const allConversion = await _model2.default.user_conversion.findAll({
			where: {
				user_id: user
			}
		});

		if (allConversion) {
			allConversion.forEach(element => {
				socket.join(element.conversion_id);
			});
		} else {
			return socket.disconnect();
		}

		socket.on("user-send-message", async message => {
			// Kiem tra conversion_id co hop le khong
			const conversion_id = message.conversion_id;
			try {
				const check = await _model2.default.user_conversion.findOne({
					where: {
						user_id: user,
						conversion_id: conversion_id
					}
				});

				if (!check) return;

				const insertMessage = {
					type: message.type,
					content: message.content
				};

				const createConversion = await _model2.default.message.create({
					creator_id: user,
					message_body: JSON.stringify(insertMessage),
					conversion_id: conversion_id
				});

				const typeConversion = await _model2.default.conversion.findOne({
					where: {
						id: conversion_id
					}
				});

				let access;
				if (typeConversion.type == 1) {
					let _tmp = await _model2.default.user_conversion.findOne({
						where: {
							conversion_id: conversion_id,
							user_id: {
								[Op.ne]: user
							}
						}
					});
					access = JSON.parse(_tmp.access);
				} else if (typeConversion.type == 2) {
					access = {
						name: true,
						avatar: true
					};
				}

				let ten_sv,
				    avatar = "";
				if (access.name) {
					const qldt_account = await _model2.default.qldt_account.findOne({
						where: {
							id: user
						}
					});

					ten_sv = qldt_account.ten_sv;
				} else {
					let _user = await _model2.default.user.findOne({
						where: {
							mssv: user
						}
					});

					ten_sv = _user.nick_name;
				}

				const obj = {
					avatar: "",
					name: ten_sv,
					body: insertMessage,
					time: new Date().toLocaleString("vi-VN"),
					conversion_id: conversion_id,
					type: typeConversion.type,
					user: user
				};

				io.to(conversion_id).emit("server-send-message", obj);
			} catch (ex) {
				socket.to(conversion_id).emit("err", ex + "");
			}
		});
	});
};

function sendMessageToRoom(user, conversion_id, message) {

	_model2.default.conversion.findOne({
		where: {
			id: conversion_id
		}
	}).then(result => {
		if (result.type == 1) {
			// xu ly kieu chat 1-1
			return _model2.default.user_conversion.findOne({
				where: {
					conversion_id: conversion_id,
					user_id: {
						[Op.ne]: user
					}
				}
			});
		} else if (result.type == 2) {
			// xu ly kieu chat 2-2


		}
	}).then(result => {
		const access = JSON.parse(result.access);

		if (access.name) {
			return _model2.default.qldt_account.findOne({
				id: user
			}).then(result => {
				return Promise.resolve(result.ten_sv);
			});
		} else {
			return _model2.default.user.findOne({
				where: {
					mssv: user
				}
			}).then(result => {
				return Promise.resolve(result.nick_name);
			});
		}
	}).then(name => {

		const obj = {
			avatar: "",
			name: name,
			body: message,
			time: new Date().toLocaleString("vi-VN")
			//socket.emit("server-send-message", obj);
		};ioSocket.to(conversion_id).emit("server-send-message", obj);
	}).catch(ex => {
		console.log("Có lỗi khi send message to room");
	});
}

exports.attachSockets = attachSockets;
exports.sendMessageToRoom = sendMessageToRoom;
//# sourceMappingURL=index.js.map