'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var x = 1;
  res.render('chatroom');
});

module.exports = router;
//# sourceMappingURL=index - Copy.js.map