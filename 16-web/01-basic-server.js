#!/usr/bin/node
var http = require('http');
http.createServer(function(req,res){
 var body='hello word';
 res.statusCode=404;
 res.setHeader('Contenet-length',Buffer.byteLength(body));
 res.setHeader('Contenet-Type','text/plain');
 console.log(req.headers);
 console.log('');
  res.end(body);
}).listen(8080);
