var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendfile('./public/html/index.html');
  // res.send('12345')
});

module.exports = router;
