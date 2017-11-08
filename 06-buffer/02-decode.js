#!/usr/bin/node

var msg=process.argv[2];
var parseBasicAuth=function(encodeString){
  var buf=new Buffer(encodeString,'base64');
  var parts=buf.toString('utf8').split(':');
  return{
    name:parts[0],
    passwd:parts[1]
  };
};

var creadentails=parseBasicAuth(msg);
console.log(creadentails);
