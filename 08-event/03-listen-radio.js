#!/usr/bin/node

var Radio=require('./03-radio');

var station={

  freq:'177.7',
  name:'music radio'
};

var radio =new Radio(station);

radio.on('open',function(){
  console.log('"%s" FM %s opened',station.name,station.freq);
  console.log('lalalala...');
})

radio.on('open',function(){
  console.log('hello',station);
  console.log('\neventsName:',radio.eventNames());
  console.log('\nopen listener count:',radio.listenerCount('open'));
console.log('\nopen listeners:',radio.listeners('open'));
})

radio.on('stop',function(){
  console.log('"%s" FM %s closed',station.name,station.freq);
});
