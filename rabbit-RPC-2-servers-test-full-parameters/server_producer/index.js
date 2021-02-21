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

const generateUuid = () => {
    return Math.random().toString() +
        Math.random().toString() +
        Math.random().toString();
};

amqp.connect('amqp://guest:guest@localhost:5672/', (err, conn) => {
    conn.createChannel((i, ch) => {

        const routingkey = 'rpc';
        const exchange = 'demo';
        const queueName = 'demo';

        const corrId = generateUuid();
        const num = parseInt(30);

        ch.assertExchange(exchange, 'direct', { durable: false });
        ch.bindQueue(queueName, exchange, routingkey);

        ch.assertQueue('', {
            exclusive: true
        }, (r, q) => {

            console.log(' [x] Requesting fib(%d)', num);

            ch.publish(exchange, routingkey, Buffer.from(num.toString()), {
                correlationId: corrId,
                replyTo: q.queue
            });

            ch.consume(q.queue, (msg) => {
                if (msg.properties.correlationId == corrId) {
                    console.log(' [.] Got %s', msg.content.toString());
                }
            }, { noAck: true });
        });
    });
});