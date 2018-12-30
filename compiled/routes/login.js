"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _auth = require("../auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET home page. */
router.use((req, res, next) => {
	if (!req.isUnauthenticated()) {
		return res.redirect('/conversion/group');
	}
	return next();
});

router.route('/').get((req, res) => {
	res.render('login');
}).post(function (req, res, next) {
	_auth.auth_passport.authenticate('local', function (err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.json({ login: false });
		}
		req.logIn(user, function (err) {
			if (err) {
				return next(err);
			}
			return res.json({ login: true });
		});
	})(req, res, next);
});

module.exports = router;
//# sourceMappingURL=login.js.map