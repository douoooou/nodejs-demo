#!/usr/bin/node
//var Dog=require('./02-dog');

//var taidi=new Dog('taidi');

//var energy=8;

//taidi.on('Bark',function(){
//  console.log(this.name+' barked');
//  energy--;
//  if(energy==0){
//    taidi.stop();
//    console.log(this.name+' is tired');
//  }
//});

var Dog=require('./02-dog');

var taidi=new Dog('taidi');
var jingba=new Dog('jingba');
var energy=8;

taidi.on('Bark',onBark);
jingba.on('Bark',onBark);
    
function onBark(){
 console.log(this.name+' barked');
  energy--;
  if(energy<=0){
    this.stop();
    console.log(this.name+' is tired');
}}
