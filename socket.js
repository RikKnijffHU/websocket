const WebSocket = require('ws');
const ws = new WebSocket('ws://192.168.1.103/Inventory');
 console.log('start');
ws.on('open', function open() {
	var interval = setInterval(function() {
	var p1 = 'This is a message from the pi!  ' + new Date().getTime();
  ws.send(p1);
},5000);
});


