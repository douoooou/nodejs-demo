#!/usr/bin/node
var cp=require('child_process');

console.log('i am father process PID:',process.pid);
var child=cp.spawn('./02-child.js',[],{detach:true,stdio:['ignore',1,2]});

//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);

child.unref();
setTimeout(function(){
  console.log('gamen over');
  process.exit(0);
},5000);
