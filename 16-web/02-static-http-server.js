#!/usr/bin/node

var http=require('http');
var fs=require('fs');

var root=__dirname+'/'+(process.argv[2]||'www');
http.createServer(function(req,res){
  var url='http://'+req.headers.host+req.url;
  console.log('URL:',url);
  console.log(req.headers);
  console.log('');

  var fileName=root+req.url;
  fs.createReadStream(fileName,function(err,data){
    if(err){
      console.log(err.message);
      res.statusCode=404;
      res.end(res.message);
    }
    else{
      res.end(data);
    }
  }).pipe(res);  
}).listen(8000);
