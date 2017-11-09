#!/usr/bin/node
var http=require('http');
var url= require('url');

var addr=process.argv[2]||'http://www.sian.com';
var options=url.parse(addr);

options.method='GET';
options.headers={'User-Agent':'02-my-curl.js'};

http.get(options,function(res){
   console.log('statucode:',res.statusCode);
   console.log('status message',res.statusMessage);
   console.log('http version',res.httpVersion);
   console.log('header:',res.headers);

   res.pipe(process.stdout);
});

