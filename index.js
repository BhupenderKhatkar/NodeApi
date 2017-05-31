var http = require('http');
var app = require('express')();

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Azure!");

});

app.get('/greeting', function (req, res) {
       res.end( 'Hello ' + req.query.name + ' welcome to my Test website');
})

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);