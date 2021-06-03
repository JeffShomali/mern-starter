var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    edit: "This page generated from views/index.jade file"
   });
});

module.exports = router;
