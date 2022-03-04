const connect = require("connect");
const serveStatic = require('serve-static'); //url에 해당하는 자원을 읽으려고 

const port = 9090;
const app = connect();

app.use(serveStatic(__dirname + "/public"));
app.listen(9090, function(){
  console.log("http server running on " + port);
})
