var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('My growing list of developer skills.');
});

module.exports = router;
