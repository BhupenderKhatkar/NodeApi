//var express = require('express');
//var app = express();

var app = require('express')();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile("users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

// http.createServer(function(request, response){

//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Hello');

app.get('/greeting', function (req, res) {
       res.end( 'Hello ' + req.query.name + ' welcome to my Test website');
})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port)

});