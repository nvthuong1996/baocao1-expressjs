'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */

/*router.use((req,res,next)=>{
	if(req.isUnauthenticated()){
		return res.redirect('/login');
	}
	return next();
})*/

router.get('/', function (req, res, next) {
	return res.redirect('/login');
});

module.exports = router;
//# sourceMappingURL=index.js.map