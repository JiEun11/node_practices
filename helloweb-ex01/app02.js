const http = require("http");
const fs = require('fs'); //url에 해당하는 자원을 읽으려고 


const port = 9090;
//요청이 들어왔을 때 실행해야 할 핸들러, 어떤 요청이 들어오던지 이 함수가 실행된다.
const server = http.createServer(function(req, resp){
  console.log("request received");
  console.log(req.url);

  if(req.rul === '/'){
    req.url = '/index.html';
  }

  //data = fs.readFileSync(''); //file 다 읽을 때까지 14번 아래로 나오지 않음(동기)
  fs.readFile(__dirname + '/public' + req.url, function(error, data){ // data:제어 못하는 프로세싱의 결과를 넣어서 보낸다. 
    resp.writeHead(200, {
      'Content-Type' : 'text/html'
    });
  
    resp.end(data);
  }); // 비동기, 안 기다림 따라서 callback을 단다. 다 읽으면 callback 실행해

}); 


server.listen(9090,function(){
  console.log("http server running on " + port);
});