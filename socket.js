io = require('socket.io');
// Create SocketIO instance, connect
var socket = new io.Socket('192.168.1.103',{
	port: 3001
});
socket.connect(); 

// Add a connect listener
socket.on('connect',function() {
	console.log('Client has connected to the server!');
});
// Add a connect listener
socket.on('message',function(data) {
	console.log('Received a message from the server!',data);
});
// Add a disconnect listener
socket.on('disconnect',function() {
	console.log('The client has disconnected!');
});

// Sends a message to the server via sockets
function sendMessageToServer(message) {
	socket.send(message);
}
