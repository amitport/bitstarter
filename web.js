var express = require('express');
var fs = require("fs");
var app = express.createServer(express.logger());

app.configure(function(){
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(app.router);
	  app.use(express.static(__dirname));});
/*
app.get('/', function(request, response) {
  var b = fs.readFileSync("index.html", 'ascii');
  response.send(b);
});

app.get('/logo.svg', function(request, response) {
	  var b = fs.readFileSync("logo.svg");
	  response.send(b);
	});
*/
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
