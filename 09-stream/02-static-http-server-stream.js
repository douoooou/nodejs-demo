#!/usr/bin/node

var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
  console.log('--------');
  console.log(req.headers);

  var fileName=__dirname+req.url;
  fs.createReadStream(fileName,function(err,data){
    if(err){
      console.log(err.message);
      res.statusCode=500;
      res.end(res.message);
    }
    else{
      res.end(data);
    }
  }).pipe(res);
}).listen(8080);
