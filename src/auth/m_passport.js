import passport from 'passport';
import LocalStrategyModul from 'passport-local';
import model from '../model';
import {decode} from "./m_jwt";

const LocalStrategy = LocalStrategyModul.Strategy;

passport.use(new LocalStrategy(
    (username,password,done) => {
        //check fbid
        let fbid = username;
        let token = password;

        decode(token)
        .then((result)=>{
            if(new Date().getTime() - result.date > 30*1000){
                return Promise.reject("Token hết hạn");
            }
            return model.user.findOne({
                where:{
                    mssv:result.id
                }
            })
        })
        .then((result)=>{
            if(!result){
                return Promise.reject("Lỗi logic chương trình");
            }else{
                return result.update({
                    fb_id:fbid
                })
                .then(()=>{
                    return done(null,{
                        id:result.get("mssv"),
                    });
                })
            }
        })
        .catch((ex)=>{
            return done(null,false);
        })
    }
))

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((user,done)=>{
    model.user.findOne({
        where:{
            mssv:user
        }
    }).then((result)=>{
        if(result){
            done(null,result.get({plain:true}));
        }else{
            done(null,false);
        }
    })
})

export default passport;