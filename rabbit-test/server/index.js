#!/usr/bin/env node

const amqp = require('amqplib/callback_api');

const fibonacci = (number) => {
    if (number == 0 || number == 1) {
        return number;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'rpc_queue';

        ch.assertQueue(q, {
            durable: false
        });

        ch.prefetch(1);

        console.log(' [x] Awaiting RPC requests');

        ch.consume(q, (msg) => {

            const n = parseInt(msg.content.toString());

            console.log(" [.] fib(%d)", n);

            const r = fibonacci(n);

            ch.sendToQueue(msg.properties.replyTo,
                new Buffer(r.toString()), {
                correlationId: msg.properties.correlationId
            });
            ch.ack(msg);
        });
    });
});