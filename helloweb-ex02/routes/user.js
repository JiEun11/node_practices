const express = require('express');

const router = express.Router();

router.route('').get(function(req, resp){
  resp.render('user/info', {
    no: req.query.no || 0
  });
});

router.route('/join').get(function(req, resp){
  resp.render('user/join');
});

router.route('/join').post(function(req, resp){
  console.log(req.body);
  resp.redirect("/");
});

router.route('/api').get(function(req, resp){
  vo = {
    no: 10,
    name: 'dooly',
    email: 'dooly@gmail.com',
    gender: 'mali'
  };

  // resp.writeHead(200,{
  //   'Content-Type' : 'application/json'
  // });

  // resp.end(JSON.stringify(vo));  //바로 vo 넣음 안 되고 string으로 바꿔줘야함 
  resp.send(vo);
});

router.route('/:no').get(function(req, resp){
  resp.render('user/info', {
    no: req.params.no || 0
  });
});

module.exports = router; // 새로운 객체로 만들어서 return, 밖으로 빼는 작업 
