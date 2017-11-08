#!/usr/bin/node
var cp=require('child_process');
//var cnd=process.argv[2];
cp.exec('cat messy.txt |sort|uniq',function(err,stdout,stderr){
  console.log(stdout);
});
