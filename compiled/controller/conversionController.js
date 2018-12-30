"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require("../model");

var _model2 = _interopRequireDefault(_model);

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _util = require("util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Op = _sequelize2.default.Op;

async function loadConversionType1(mssv) {
    let type = 1;

    const allConversion = await _model2.default.user_conversion.findAll({
        where: {
            user_id: mssv
        }
    });

    if (!allConversion) return null;

    let result = [];

    for (const item of allConversion) {
        let obj = {};
        obj["you"] = item.user_id;
        obj["id"] = item.conversion_id;

        let friend = await _model2.default.user_conversion.findOne({
            where: {
                conversion_id: item.conversion_id,
                user_id: {
                    [Op.ne]: mssv
                }
            }
        });
        let typeConersion = await _model2.default.conversion.findOne({
            where: {
                id: item.conversion_id
            }
        });

        if (typeConersion.type != type) {
            continue;
        }

        if (!friend) {
            // Nếu không có friend thì có thể là group chat
            debugger;
            continue;
        }

        obj["friend"] = friend.user_id;

        // Tim ten cua conversion

        const access = JSON.parse(item.access);

        obj["avatar"] = "";

        if (access.name) {
            const friendInfo = await _model2.default.qldt_account.findOne({
                where: {
                    id: obj["friend"]
                }
            });

            obj["name_conversion"] = friendInfo.ten_sv;
        } else {
            const friendInfo = await _model2.default.user.findOne({
                where: {
                    mssv: obj["friend"]
                }
            });

            obj["name_conversion"] = friendInfo.nick_name;
        }

        const latestMessage = await _model2.default.message.findOne({
            where: {
                conversion_id: item.conversion_id
            },
            order: [['updatedAt', 'DESC']]
        });

        if (latestMessage) {
            if (latestMessage.creator_id == obj["friend"]) {
                obj["is_reader"] = latestMessage.is_reader;
            } else {
                obj["is_reader"] = true;
            }
            const _tmp = JSON.parse(latestMessage.message_body);

            if (_tmp.type == "text") {
                obj["latestMessage"] = _tmp.content;
            } else if (_tmp.type == "stick") {
                obj["latestMessage"] = "đã gửi một nhãn dán.";
            } else if (_tmp.type == "image") {
                obj["latestMessage"] = "đã gửi một ảnh.";
            }
        } else {
            obj["is_reader"] = true;
            obj["latestMessage"] = "";
        }

        result = result.concat(obj);
    }

    return result;
}

async function loadConversionType2(mssv) {
    let type = 2;

    const allConversion = await _model2.default.user_conversion.findAll({
        where: {
            user_id: mssv
        }
    });

    if (!allConversion) return null;

    let result = [];

    for (const item of allConversion) {
        let obj = {};
        obj["you"] = item.user_id;
        obj["id"] = item.conversion_id;

        let typeConersion = await _model2.default.conversion.findOne({
            where: {
                id: item.conversion_id
            }
        });

        if (typeConersion.type != type) {
            continue;
        }

        obj["avatar"] = "";
        obj["name_conversion"] = typeConersion.name;

        const latestMessage = await _model2.default.message.findOne({
            where: {
                conversion_id: item.conversion_id
            },
            order: [['updatedAt', 'DESC']]
        });

        if (latestMessage) {
            if (latestMessage.creator_id == obj["friend"]) {
                obj["is_reader"] = latestMessage.is_reader;
            } else {
                obj["is_reader"] = true;
            }
            const _tmp = JSON.parse(latestMessage.message_body);

            if (_tmp.type == "text") {
                obj["latestMessage"] = _tmp.content;
            } else if (_tmp.type == "stick") {
                obj["latestMessage"] = "đã gửi một nhãn dán.";
            } else if (_tmp.type == "image") {
                obj["latestMessage"] = "đã gửi một ảnh.";
            }
        } else {
            obj["is_reader"] = true;
            obj["latestMessage"] = "";
        }

        result = result.concat(obj);
    }

    return result;
}

exports.default = { loadConversionType1, loadConversionType2 };
//# sourceMappingURL=conversionController.js.map