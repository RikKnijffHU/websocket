const WebSocket = require('ws');
const ws = new WebSocket('ws://192.168.0.111:3001/Inventory');
 console.log('start');
ws.on('open', function open() {
	var interval = setInterval(function() {
	var p1 = Math.floor(Math.random() * Math.floor(max))
  ws.send(p1);
},1000);
});

ws.on('message', function incoming(data) {
  console.log(data);
});


