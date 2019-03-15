var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);

var config  = require('./config.json');

app.use(express.static(__dirname + '/../client'));


var users = [];
var sockets = {};

io.on('connection', function (socket) {
  console.log("Somebody connected!", socket.handshake.query.type);

  var type = socket.handshake.query.type;
  // Write your code here
});

function tickPlayer(currentPlayer){

}

function gameloop(){

}

function moveloop(){
for(var i = 0 ; i<users.length;i++){
tickPlayer(users[i]);
}
}

function sendUpdates(){
users.forEach(function(u){
u.x = u.x || config.gameWidth/2;
u.y = u.y || config.gameHeight/2;

var visiblePlayers = users.map(function(f){

}).filter(function(f){ return f;});


socket[u.id].emit('serverSendUpdatePositions', visiblePlayers);

});
}

setInterval(moveloop,1000/60);
setInterval(gameloop, 1000);
setInterval(sendUpdates, 1000/config.networkUpdateFactor);



var serverPort = process.env.PORT || config.port;
http.listen(serverPort, function() {
  console.log("Server is listening on port " + serverPort);
});
