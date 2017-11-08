#!/usr/bin/node
var cp=require('child_process');
console.log('i am farher process PID:',process.pid);

cp.execFile('cat',['01-exec-file.js'],function(err,stdout,stderr){
  if(err) console.log(err);
  console.log(stdout);
});
