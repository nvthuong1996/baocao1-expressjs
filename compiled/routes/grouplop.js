"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _model = require("../model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

/* GET home page. */

router.use((req, res, next) => {
    if (req.isUnauthenticated()) {
        return res.redirect('/login');
    }
    return next();
});

router.post("/:id", async (req, res, next) => {
    const id = req.params.id;
    const user = req.user.mssv;
    let user_conversion = await _model2.default.user_conversion.findOne({
        where: {
            conversion_id: id,
            user_id: user
        }
    });

    if (!user_conversion) {
        return res.redirect('/grouplop/' + id);
    }

    let user_info = await _model2.default.qldt_account.findOne({
        where: {
            id: user
        }
    });

    let conversion = await _model2.default.conversion.findOne({
        where: {
            id: id
        }
    });

    var data = {
        link: req.body.link,
        name: user_info.ten_sv,
        mssv: user_info.id
    };

    await conversion.update({
        link_group_lop: JSON.stringify(data)
    });

    return res.redirect('/grouplop/' + id);
});

router.get("/:id", async (req, res, next) => {
    let id = req.params.id;
    let conversion = await _model2.default.conversion.findOne({
        where: {
            id: id
        }
    });
    let groupInfo = {};
    if (conversion) {
        groupInfo = JSON.parse(conversion.link_group_lop);
        if (groupInfo) {
            groupInfo["check"] = true;
        } else {
            groupInfo = {
                check: false
            };
        }
    } else {
        groupInfo["check"] = false;
    }

    return res.render("grouplop", {
        groupInfo: groupInfo,
        id: id
    });
});

module.exports = router;
//# sourceMappingURL=grouplop.js.map