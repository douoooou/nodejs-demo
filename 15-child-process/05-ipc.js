#!/usr/bin/node
var cp=require('child_process');

console.log('i am father process PID:',process.pid);
var child=cp.fork('./05-ipc-child.js');
child.on('message',function(msg){
  console.log('msg from child',msg);
});


setTimeout(function(){
  child.send('i am father process pid:',process.pid)
},2000);
