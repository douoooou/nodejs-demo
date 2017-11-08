#!/usr/bin/node

var EventEmitter=require('events').EventEmitter;

function MusicPlayer(track){
  this.track=track;
  this.playing=false;
  this.events={
    play:'play',
    stop:'stop'
  };
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
var e=musicPlayer.events;
musicPlayer.on(e.play,function(){
  this.playing=true;
  console.log('\n',this.toString());
})
musicPlayer.on(e.stop,function(){
  this.playing=false;
  console.log('\n',this.toString());
})

musicPlayer.emit(e.play);
setTimeout(function(){
  musicPlayer.emit(e.stop);
},2000)


