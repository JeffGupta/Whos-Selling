var http = require("http");

http.createServer(function (request, response) {
   app.use(express.static('public'));
}).listen(8081);
