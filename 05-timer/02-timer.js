#!/usr/bin/node

console.log('start...');

//var timeID = setInterval(loop,500);
//function loop(){
//  console.log('I will loop forever');
//}
//setTimeout(function(){
//  clearInterval(timeID);
//},3000);
//
//
//var count=0;
//var timeID=setInterval(loop,500);
//function loop(){
  //count++;
  //console.log('I will loop forever');
 // if(6===count){
 //   clearInterval(timeID);
 // }
//}
var timeID=setInterval(loop,500);
timeID.unref();
function loop(){
  console.log('I will loop forever');
}
setTimeout(function(){
  console.log('game over');
},5000);
