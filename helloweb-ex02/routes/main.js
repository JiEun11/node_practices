const express = require('express');

const router = express.Router();

router.route('').get(function(req, resp){
  resp.render('main/index');

});

module.exports = router; // 새로운 객체로 만들어서 return, 밖으로 빼는 작업 
