#!/usr/bin/node

var EventEmitter=require('events').EventEmitter;

function MusicPlayer(track){
  this.track=track;
  this.playing=false;

for(var methorName in EventEmitter.prototype){
  console.log(methorName);
  this[methorName]=EventEmitter.prototype[methorName];
 }
}
MusicPlayer.prototype={
 toString:function(){
    if(this.playing){
    return "new playing:" + this.track;
    }else{
    return "stopped";
 }
}
}
var musicPlayer=new MusicPlayer('storm');
musicPlayer.on('play',function(){
  this.playing=true;
  console.log('\n',this.toString());
})
musicPlayer.on('stop',function(){
  this.playing=false;
  console.log('\n',this.toString());
})
musicPlayer.on('error',function(err){
   console.error(err);
   process.exit(1);
});
process.on('uncaughtException',function(err){
    console.error(err);
    process.exit(1);
})

musicPlayer.emit('play');
setTimeout(function(){
  musicPlayer.emit('stop');
},2000)

setTimeout(function(){
  musicPlayer.emit('error',new Error('ERROR'));
},3000)
