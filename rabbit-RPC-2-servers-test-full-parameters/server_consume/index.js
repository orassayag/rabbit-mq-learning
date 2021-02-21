const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const amqp = require('amqplib/callback_api');
const { settings } = require('./settings/settings');

// Set general settings.
app.use(cors());
app.options('*', cors());
app.use(express.json());

// Set the CORS.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Set the server.
const server = http.Server(app);

// Listening to the server.
server.listen(settings.SERVER_PORT, () => {
    console.log(`Listening on port ${settings.SERVER_PORT}...`);
});


const fibonacci = (n) => {
    if (n == 0 || n == 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

amqp.connect('amqp://guest:guest@localhost:5672/', (err, conn) => {
    conn.createChannel((i, ch) => {
        const routingkey = 'rpc';
        const exchange = 'demo';
        const queueName = 'demo';

        ch.prefetch(1);

        console.log(' [x] Awaiting RPC requests');

        ch.assertExchange(exchange, 'direct', { durable: false });

        ch.assertQueue(exchange, { exclusive: false, durable: false }, (y, q) => {

            ch.consume(queueName, reply = (msg) => {

                const n = parseInt(msg.content.toString());

                console.log(' [.] fib(%d)', n);
                const r = fibonacci(n);

                ch.bindQueue(queueName, exchange, routingkey);

                ch.sendToQueue(msg.properties.replyTo,
                    Buffer.from(r.toString()), {
                    correlationId: msg.properties.correlationId
                });
                ch.ack(msg);
            });
        });
    });
});