#!/usr/bin/node
var cp=require('child_process');

console.log('i am child process PID:',process.pid);

var timer=global.setInterval(function(){
  console.log(global.Date.now());
},2000);
global.setTimeout(function(){
   global.clearInterval(timer);
   console.log('16 seconds ,game over');
},16000);

