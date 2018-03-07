var app = require('express')(); //Express Library
var server = require('http').Server(app); //Create HTTP instance
var io = require('socket.io')(server); //Socket.IO Library
 
var tempSensor = hoi; //temperature sensor connected to analog pin 0

app.get('/', function(req, res) {                  
    res.sendfile(__dirname + '/index.html'); //serve the static html file
});                                                 
 
io.on('connection', function(socket){
    var interval = setInterval(function(){
        socket.emit('bericht', { bericht: tempSensor }); //bericht
    }, 500);
    socket.on('disconnect', function(){
        clearInterval(interval);
    });    
});                                                   
 
server.listen(3000); //run on port 3000
