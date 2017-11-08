#!/usr/bin/node
var http=require('http');
var cp=require('child_process');
console.log('i am father process PID:',process.pid);
http.createServer(function(req,res){
  var child=cp.spawn('./02-child.js');
  child.stdout.pipe(res);
}).listen(8080);

