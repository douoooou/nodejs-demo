#!/usr/bin/node
var cp=require('child_process');

console.log('i am father process PID:',process.pid);
var child=cp.fork('02-child.js');

setTimeout(function(){
  console.log('father game over');
  process.exit(0);
},5000);
