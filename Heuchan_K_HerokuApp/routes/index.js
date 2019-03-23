var express = require('express');

var router = express.Router();


//! Require data.js to function
const data = require('../data');



/* GET home page here */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;