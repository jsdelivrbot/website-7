var express = require('express');
var router = express.Router();

/* GET home page. */
//why not .get('/snake')?
router.get('/', function(req, res, next) {
  res.render('snake', { title: 'Snake', scripts: ['javascripts/colourScript.js', 'javascripts/jquery-1.11.3.js', 'javascripts/snakeGame.js']});
});

module.exports = router;
