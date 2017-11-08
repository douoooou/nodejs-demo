#!/usr/bin/node

//var pi =require('./02-export-var');

//console.log('pi:',pi);
//var circle=require('./02-export-function');
//console.log(circle);
//console.log('area:',circle(20).area());
//console.log('circumference:',circle(20).circumference());

var pi= Math.PI;

var Circle=function(radius){
  this.diameter=function(){
     return 2*radius;
  }
  this.circumference=function(){
    return pi*2*radius;
  }
  this.area=function(){
    return pi*radius*radius;
  }
}
console.log('\n02-export-object\n',module);
module.exports=Circle;
