#!/usr/bin/node
var cp=require('child_process');

console.log('i am father process PID:',process.pid)

cp.execFile('./02-child.js',function(err,stdout,stderr){

  console.log(stdout);
});
