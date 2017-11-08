#!/usr/bin/node

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data',function(data){
  process.stdout.write(data.toUpperCase());
});
