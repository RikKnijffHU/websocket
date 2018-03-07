// Create SocketIO instance, connect
var io = require('socket.io-client');
var serverUrl = 'http://192.168.1.103:3001';
var conn = io.connect(serverUrl);
 console.log('start');

var p1 = 'hoi';
conn.emit('message', p1, function(resp, data) {
    console.log('server sent resp code ' + resp);
});
