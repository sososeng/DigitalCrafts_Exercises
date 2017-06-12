var express = require('express');
var io = require('socket.io');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));


app.get('/', function (request, response) {
  response.render('index.html');
});


io.on('connection', function(client){
  console.log('CONNECTED', client.id);

  client.on('draw-line',function(msg){
    console.log(msg);
    io.emit('line-broadcast',msg);

  });

  client.on('disconnect', function () {
    console.log('EXITED');
  });
});

http.listen(8000);
