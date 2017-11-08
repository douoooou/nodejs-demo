#!/usr/bin/node
var http=require('http');

var url=process.argv[2]||'http://sample.wangding.in/web/one-div.html';

http.get(url,function(res){
   console.log('statucode:',res.statusCode);
   console.log('status message',res.statusMessage);
   console.log('http version',res.httpVersion);
   console.log('header:',res.headers);

   res.pipe(process.stdout);
});

