var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());
var bf = new  Buffer(fs.readFileSync("./index.html"));
app.get('/', function(request, response) {
  var respuesta = bf.toString();
  response.send(respuesta);
  response.end
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
