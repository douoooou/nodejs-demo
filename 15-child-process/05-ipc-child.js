#!/usr/bin/node
var cp=require('child_process');

console.log('i am child process PID:',process.pid);

process.on('message',function(msg){
  console.log('msg from father',msg);
});
//process.send("hello,i am chile process :"+ process.pid);
