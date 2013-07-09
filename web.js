var express = require('express');
var fs = require("fs");

var app = express(express.logger());
var bf = new  Buffer(fs.readFileSync("./index2.html"));
app.get('/', function(request, response) {
  var respuesta = bf.toString();
  response.send(respuesta);
  response.end
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
