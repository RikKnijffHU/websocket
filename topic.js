var amqp = require('amqplib/callback_api');

amqp.connect('amqp://172.16.3.169', function(err, conn) {
  console.log(conn);
  console.log(err);
  conn.createChannel(function(err, ch) {
    var ex = 'InventoryBus';
    var args = process.argv.slice(2);
    var key = 'Inventory.RasberryService.VoorraadVeranderdEvent'
    var msg = {ArtikelNummer:1, NieuweVoorraad: 52};

    ch.assertExchange(ex, 'topic', {durable: false});
    ch.publish(ex, key, new Buffer(msg));
    console.log(" [x] Sent %s:'%s'", key, msg);
  });
  console.log("na");
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
