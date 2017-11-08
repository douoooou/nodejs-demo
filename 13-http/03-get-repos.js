#!usr/bin/node
var http=require('https');
var url=require('url');
var user=process.argv[2]||'wangding';

var addr='http://api.github.com/search/repositories?q=user:'+user;

options.headers={'User-Agent':'03-get-repos.js'};

http.get(options,function(res){
  var data="";
  res.on('data',function(chunk){
     data+=chunk;
  });
  res.on('end',function(){
      var repos=JSON.parse(data);
      for(var i-0;i<repos.total_count;i++){
        console.log(repos.item[i].name);
      }
  })
  
}).on('error',function(err){
  console.log(err);
})

