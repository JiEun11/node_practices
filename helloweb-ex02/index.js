const http = require('http');
const path = require('path');
const express = require('express');

const helloRouter = require('./routes/hello');
const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
//const { nextTick } = require('process'); 이게 뭘까요?

const port = 9090;

// Application SetUp
const application = express()
    // 1. static resources
    .use(express.static(path.join(__dirname, "assets")))
    // 2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded : tomcat
    .use(express.json())  // application/json : 
    // 3. view engine
    .set('views',path.join(__dirname, "views"))
    .set('view engine','ejs')

    // 4. request router
    .all('*',function(req, resp, next){
      resp.locals.req = req;
      resp.locals.resp = resp;
      next();
    })
    .use('/', mainRouter)
    .use('/hello', helloRouter)
    .use('/user',userRouter);

// Server SetUp
http
  .createServer(application)
  .on('listening', function(){
    console.log("http server runs on " + port);
  })
  .on('error', function(error){
    console.error(error);
  })
  .listen(port);
