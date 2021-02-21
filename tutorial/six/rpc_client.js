#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        ch.assertQueue('', {
            exclusive: true
        }, function (err, q) {
            var corr = generateUuid();
            var num = parseInt(30);
            console.log(' [x] Requesting fib(%d)', num);
            ch.consume(q.queue, function (msg) {
                if (msg.properties.correlationId == corr) {
                    console.log(' [.] Got %s', msg.content.toString());
                    setTimeout(function () {
                        conn.close();
                        process.exit(0)
                    }, 500);
                }
            }, {
                noAck: true
            });
            ch.sendToQueue('rpc_queue',
                new Buffer(num.toString()), {
                correlationId: corr,
                replyTo: q.queue
            });
        });
    });
});

function generateUuid() {
    return Math.random().toString() +
        Math.random().toString() +
        Math.random().toString();
}