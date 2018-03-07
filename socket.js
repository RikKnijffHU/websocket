// Create SocketIO instance, connect
var io = require('socket.io-client');
var serverUrl = 'http://192.168.1.103:3001';
var conn = io.connect(serverUrl);
 console.log('start');
var interval = setInterval(function() {
	var p1 = 'This is a message from the pi!  ' + new Date().getTime();
conn.emit('message', p1, function(resp, data) {
    console.log('server sent resp code ' + resp);
});
},5000);

