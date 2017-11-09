function makeload(){
  for(var i=0;i<10000000000;i++);
}

function logSomething(){
    console.log('something');
}

setInterval(makeload,2000);

setInterval(logSomething,0);
