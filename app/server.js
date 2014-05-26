var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  response.end(ip);
});

server.listen(8080, "0.0.0.0");

