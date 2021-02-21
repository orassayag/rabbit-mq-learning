#!/usr/bin/env node

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'hello';
        const msg = 'Hello World!';

        ch.assertQueue(q, {
            durable: false
        });
        ch.sendToQueue(q, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(() => {
        conn.close();
        process.exit(0)
    }, 500);
});