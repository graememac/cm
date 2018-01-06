var compression = require('compression')
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);

app.use(compression());
app.use(express.static('app/static'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/app/index.html');
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});