const express = require('express');
const pg = require('../db/knex');
const router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res) {
  res.render('signup', {layout: 'layout.hbs'});
});
router.post('/profile',function(req, res) {
  console.log(req.body);
});

module.exports = router;
