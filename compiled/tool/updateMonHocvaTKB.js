"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createConversionFromMonHoc = exports.updateCSDL = undefined;

var _model = require("../model");

var _model2 = _interopRequireDefault(_model);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _allMh = require("../../qldtData/allMh.json");

var _allMh2 = _interopRequireDefault(_allMh);

var _dkmh = require("../../qldtData/dkmh.json");

var _dkmh2 = _interopRequireDefault(_dkmh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateCSDL() {

    await _model2.default.dkmh.sync({ force: true });

    await _model2.default.monhoc.sync({ force: true });

    let monhoc = Object.keys(_allMh2.default);
    let sinhvien = Object.keys(_dkmh2.default);

    for (let i of monhoc) {

        for (let j of _allMh2.default[i]) {
            let data = j.slice(0, j.length - 1);
            let obj;
            if (j[4]) {
                obj = {
                    mdk: j[0],
                    msmh: j[1],
                    tenmonhoc: j[2],
                    nhommonhoc: parseInt(j[3]),
                    nhomthuchanh: parseInt(j[4]),
                    data: JSON.stringify(data)
                };
            } else {
                obj = {
                    mdk: j[0],
                    msmh: j[1],
                    tenmonhoc: j[2],
                    nhommonhoc: parseInt(j[3]),
                    data: JSON.stringify(data)
                };
            }

            await _model2.default.monhoc.create(obj);
        }
    }

    for (let i of sinhvien) {
        let tkb = _dkmh2.default[i].tkb;
        for (let monhoc of Object.keys(tkb)) {
            let obj = {
                mssv: i,
                mdk: tkb[monhoc]
            };
            await _model2.default.dkmh.create(obj);
        }
    }
}

async function createConversionFromMonHoc() {
    let allNMH = await _model2.default.monhoc.findAll();
    for (let item of allNMH) {
        let tenmonhoc = item.tenmonhoc + "(N" + item.nhommonhoc;
        if (item.nhomthuchanh) {
            tenmonhoc += ":T" + item.nhomthuchanh + ")";
        } else {
            tenmonhoc += ")";
        }

        let conversion = {
            name: tenmonhoc,
            is_active: 1,
            type: 2
        };

        let createConversion = await _model2.default.conversion.create(conversion);

        await item.update({
            conversion_id: createConversion.id
        });
    }
}

exports.updateCSDL = updateCSDL;
exports.createConversionFromMonHoc = createConversionFromMonHoc;
//# sourceMappingURL=updateMonHocvaTKB.js.map