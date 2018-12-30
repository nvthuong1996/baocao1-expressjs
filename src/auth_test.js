import passport from 'passport';
import LocalStrategyModul from 'passport-local';
import model from './model';
const LocalStrategy = LocalStrategyModul.Strategy;

passport.use(new LocalStrategy(
    (username,password,done) => {
        debugger;
        console.log("Dang vao roi");
        return done(null,false);
    }
))


export default passport;