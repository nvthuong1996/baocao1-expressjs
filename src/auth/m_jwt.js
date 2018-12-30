import jwt from "jsonwebtoken";
import fs from "fs";

var cert_public = fs.readFileSync("./cert.pub");
var cert_private = fs.readFileSync("./cert.key");

export {
    decode,
    encode
}

function decode(token){
    return new Promise((resolve,reject)=>{
        jwt.verify(token, cert_public, function(err, decoded) {
            if(err){
                reject(err);
            }else{
                resolve(decoded);
            }
        });
    })
}

function encode(obj){
    var token = jwt.sign(obj, cert_private, { algorithm: 'RS256'});
    return token;
}