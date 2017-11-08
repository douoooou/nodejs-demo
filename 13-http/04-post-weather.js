#!/usr/bin/node
var http=require('http');
const{URL}=require('url');

var city=process.argv[2]||'唐山';

var options='http://api.jisuapi.com/weather/query?appkey=832a8da839908a05&city='+city;
options.method='post';
console.log('OPTIONS',options);

var req=http.request(new URL(options),function(res){

     var result="";

     res.on('data',function(data){ 
       result+=data.toString('utf8');
     });

     res.on('end',function(){
          var weather=JSON.parse(result);
          console.log(weather);
     });
}).on('error',function(err){
  console.log('problem with request',err.message)
});

req.end();
