var http = require("http");
var fs = require("fs");
var testModule = require("./modules/main")

http.createServer(function(request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值： 200 ： OK
    // 内容类型： text/plain
    response.writeHead(200, {"Content-Type": "text/plain"});

    var data = fs.readFileSync("input.txt");
    response.end("Hello World! " + data.toString());

    testModule.testReadFile();
}).listen(8888);

console.log("Server is running at http://127.0.0.1:8888");

