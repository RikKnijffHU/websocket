var amqp = require('amqplib');
var key =  'Inventory.RasberryService.VoorraadVeranderdEvent';
var message = '{ArtikelNummer:1, NieuweVoorraad: 52}';

amqp.connect('amqp://172.16.3.169').then(function(conn) {
  return conn.createChannel().then(function(ch) {
    var ex = 'InventoryBus';
    var ok = ch.assertExchange(ex, 'topic', {durable: false});
    return ok.then(function() {
      ch.publish(ex, key, Buffer.from(message));
      console.log(" [x] Sent %s:'%s'", key, message);
      return ch.close();
    });
  }).finally(function() { conn.close(); })
}).catch(console.log);
