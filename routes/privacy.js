var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('privacy', { title: 'Privacy Policy', scripts: ['javascripts/colourScript.js', 'javascripts/jquery-1.11.3.js']});
});

module.exports = router;
