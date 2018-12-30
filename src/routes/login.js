import express from "express";
import {auth_passport} from "../auth";
var router = express.Router();

/* GET home page. */
router.use((req,res,next)=>{
	if(!req.isUnauthenticated()){
		return res.redirect('/conversion/group');
	}
	return next();
})

router.route('/')
.get((req, res) => {
  res.render('login');
})
.post(function(req, res, next) {
	auth_passport.authenticate('local', function(err, user, info) {
		if (err) { return next(err); }
		if (!user) { return res.json({login:false}); }
		req.logIn(user, function(err) {
		if (err) { return next(err); }
		return res.json({login:true});
		});
	})(req, res, next);
});

module.exports = router;
