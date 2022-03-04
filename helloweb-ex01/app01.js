const http = require("http");

const port = 9090;
//요청이 들어왔을 때 실행해야 할 핸들러, 어떤 요청이 들어오던지 이 함수가 실행된다.
const server = http.createServer(function(req, resp){
  console.log("request received");
  resp.writeHead(200, {
    'Content-Type' : 'text/html'
  });

  resp.end('<h1>Hello world</h1>');
}); 


server.listen(9090,function(){
  console.log("http server running on " + port);
});