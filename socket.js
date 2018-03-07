// Create SocketIO instance, connect
var io = require('socket.io-client');
var serverUrl = 'http://192.168.1.103:3001';
var conn = io.connect(serverUrl);
 
var p1 = new Date().getTime();
conn.emit('call', p1, function(resp, data) {
    console.log('server sent resp code ' + resp);
});
