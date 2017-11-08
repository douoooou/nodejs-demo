#!/usr/bin/node
var http=require('http');
const{URL}=require('url');
var city=process.argv[2]||'唐山';


var addr='http://api.jisuapi.com/weather/query?appkey=832a8da839908a05&city='+city;

http.get(new URL(addr),function(res){
  var result="";
  res.on('data',function(data){
    result+=data.toString('utf8');
  });
  res.on('end',function(){
    var weather=JSON.parse(result);
    console.log(weather);
  });
  
});

