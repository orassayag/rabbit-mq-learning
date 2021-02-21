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
        ch.assertQueue('', {
            exclusive: true
        }, (r, q) => {

            const corr = generateUuid();
            const num = parseInt(30);

            console.log(' [x] Requesting fib(%d)', num);

            ch.consume(q.queue, (msg) => {

                if (msg.properties.correlationId == corr) {

                    console.log(' [.] Got %s', msg.content.toString());
                }

            }, { noAck: true });

            ch.sendToQueue('rpc_queue',
                Buffer.from(num.toString()), {
                correlationId: corr,
                replyTo: q.queue
            });
        });
    });
});