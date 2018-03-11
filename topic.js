var amqp = require('amqplib/callback_api');

amqp.connect('amqp://192.168.0.111', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var ex = 'InventoryBus';
    var args = process.argv.slice(2);
    var key = 'Inventory.RasberryService.VoorraadVeranderdEvent'
    var msg = {ArtikelNummer:1, NieuweVoorraad: 52};

    ch.assertExchange(ex, 'topic', {durable: false});
    ch.publish(ex, key, new Buffer(msg));
    console.log(" [x] Sent %s:'%s'", key, msg);
  });

  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
