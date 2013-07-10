var express = require('express');
var fs = require("fs");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var b = fs.readFileSync("index.html", 'ascii');
  response.send(b);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
