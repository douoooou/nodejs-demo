#!/usr/bin/node
var http = require('http');
http.createServer(function(req,res){
   
  switch(req.url){
    case '/':
      sendNormalMsg(res);
      break;

    case '/admin':
      sendSecretMsg(req,res);
      break;

    default:
      sendErrorMsg(res);
      break;
  } 
  
}).listen(8080);

function sendNormalMsg(res){
  res.end('good girl');
}

function sendSecretMsg(req,res){

  if(req.headers.authorization){
     console.log(req.headers.authorization);
     res.end('17777777');
  }else{
    res.writeHead(401,{'WWW-Authenticate':'Basic'});
    res.end('who you are?');
  }
}
function sendErrorMsg(res){
  res.end('404 found , resource not exist');
}
