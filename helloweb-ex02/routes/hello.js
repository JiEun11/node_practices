const express = require('express');

const router = express.Router();

router.route('/01').get(function(req, resp){
  resp.render('hello/01');
  // resp.writeHead(200, {
  //   'Content-Type' : 'text/html'
  // });

  // resp.end('<h1>/hello/01</h1>');
});

router.route('/02').get(function(req, res){
  const data = {
    no: req.query.no || '', // null 처리 
    email: req.query.email || ''
  };
  
  res.render('hello/02',data);
});

module.exports = router; // 새로운 객체로 만들어서 return, 밖으로 빼는 작업 
