import model from "../model";
import fs from "fs";

import allMh from "../../qldtData/allMh.json";
import dkmh from "../../qldtData/dkmh.json";

async function updateCSDL () {

    await model.dkmh.sync({force: true});
    
    await model.monhoc.sync({force: true});
    
    let monhoc = Object.keys(allMh);
    let sinhvien = Object.keys(dkmh);
    
    
    for(let i of monhoc){
    
        for(let j of allMh[i]){
            let data = j.slice(0,j.length-1);
            let obj;
            if(j[4]){
                obj = {
                    mdk: j[0],
                    msmh: j[1],
                    tenmonhoc: j[2],
                    nhommonhoc: parseInt(j[3]),
                    nhomthuchanh: parseInt(j[4]),
                    data:JSON.stringify(data)
                }
            }else{
                obj = {
                    mdk: j[0],
                    msmh: j[1],
                    tenmonhoc: j[2],
                    nhommonhoc: parseInt(j[3]),
                    data:JSON.stringify(data)
                }
            }

            await model.monhoc.create(obj)
            
        }
    }

    for(let i of sinhvien){
        let tkb = dkmh[i].tkb;
        for(let monhoc of Object.keys(tkb)){
            let obj ={
                mssv:i,
                mdk:tkb[monhoc]
            }
            await model.dkmh.create(obj)
            
        }
    }
}

async function createConversionFromMonHoc(){
    let allNMH = await model.monhoc.findAll();
    for(let item of allNMH){
        let tenmonhoc = item.tenmonhoc+ "(N" +item.nhommonhoc;
        if(item.nhomthuchanh){
            tenmonhoc += ":T"+item.nhomthuchanh+")";
        }else{
            tenmonhoc += ")";
        }

        let conversion = {
            name:tenmonhoc,
            is_active:1,
            type:2
        }

        let createConversion = await model.conversion.create(conversion);

        await item.update({
            conversion_id:createConversion.id
        });


    }


}

export {updateCSDL,createConversionFromMonHoc};