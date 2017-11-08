console.log('hello world!');

var http = require('http');
http.createSever(function(req,res){

  res.end('hello world');
}).listen(8080);
