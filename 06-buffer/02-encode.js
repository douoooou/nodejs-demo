#!/usr/bin/node

var name=process.argv[2];
var passwd=process.argv[3];
console.log('name:',name);
console.log('\npasswd:',passwd);


var buf=new Buffer(name+':'+passwd);
console.log('name and passwd:',buf.toString());
console.log('name and passwd with base64:',buf.toString('base64'));
console.log('name and passwd with hex:',buf.toString('hex'));
