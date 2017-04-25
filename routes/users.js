
var express = require('express');
var pg = require('../db/knex');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.redirect('signup');
});

router.post('/signup',function(req, res) {
  console.log(req.body);
  var info = req.body;
  pg('personal').insert(info).then(()=>{
    res.redirect('/');
  })
} )






module.exports = router;
