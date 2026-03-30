# Instructions

## Setup Instructions

### Prerequisites

- Node.js (v10 or higher)
- npm or pnpm
- RabbitMQ server (local installation or Docker)

### Installing RabbitMQ

#### Using Docker (Recommended)
```bash
docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

Access RabbitMQ Management UI at: http://localhost:15672 (username: guest, password: guest)

#### Local Installation
- **Windows**: Download from [RabbitMQ Windows Installation](https://www.rabbitmq.com/install-windows.html)
- **macOS**: `brew install rabbitmq`
- **Linux**: Follow [RabbitMQ Linux Installation](https://www.rabbitmq.com/download.html)

### Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/orassayag/rabbit-mq-learning.git
   cd rabbit-mq-learning
   ```

2. Install dependencies for each example you want to run:
   ```bash
   cd tutorial/one
   npm install
   ```

## Running Examples

### Tutorial Examples

#### Tutorial One: Hello World
Basic message sending and receiving.

**Terminal 1 (Receiver):**
```bash
cd tutorial/one
npm install
node receive.js
```

**Terminal 2 (Sender):**
```bash
cd tutorial/one
node send.js
```

#### Tutorial Two: Work Queues
Distributing tasks among multiple workers.

**Terminal 1 (Worker):**
```bash
cd tutorial/two
npm install
node worker.js
```

**Terminal 2 (Worker):**
```bash
cd tutorial/two
node worker.js
```

**Terminal 3 (Producer):**
```bash
cd tutorial/two
node new_task.js
```

#### Tutorial Six: RPC Pattern
Remote Procedure Call implementation.

**Terminal 1 (RPC Server):**
```bash
cd tutorial/six
npm install
node rpc_server.js
```

**Terminal 2 (RPC Client):**
```bash
cd tutorial/six
node rpc_client.js
```

### RPC Server Examples

#### Basic RPC Test
Simple RPC pattern with producer and consumer servers.

**Terminal 1 (Consumer/Server):**
```bash
cd rabbit-RPC-2-servers-test/server_consume
npm install
npm start
```

**Terminal 2 (Producer/Client):**
```bash
cd rabbit-RPC-2-servers-test/server_producer
npm install
npm start
```

#### Full JSON RPC Test
RPC pattern with JSON message formatting.

**Terminal 1 (Consumer/Server):**
```bash
cd rabbit-RPC-2-servers-test-full-json/server_consume
npm install
npm start
```

**Terminal 2 (Producer/Client):**
```bash
cd rabbit-RPC-2-servers-test-full-json/server_producer
npm install
npm start
```

#### Full Parameters RPC Test
RPC pattern with parameter-based messaging.

**Terminal 1 (Consumer/Server):**
```bash
cd rabbit-RPC-2-servers-test-full-parameters/server_consume
npm install
npm start
```

**Terminal 2 (Producer/Client):**
```bash
cd rabbit-RPC-2-servers-test-full-parameters/server_producer
npm install
npm start
```

### React Client Example

Full-stack example with React frontend and RabbitMQ backend.

**Terminal 1 (Server):**
```bash
cd rabbit-test/server
npm install
node index.js
```

**Terminal 2 (Client):**
```bash
cd rabbit-test/client
npm install
npm start
```

Open browser at: http://localhost:3000

## Understanding the Examples

### Message Flow

```
Producer → Queue → Consumer
```

### RPC Pattern Flow

```
Client (Producer) → Request Queue → Server (Consumer)
                                           ↓
Client (Consumer) ← Reply Queue ← Server (Producer)
```

### Key Concepts Demonstrated

1. **Basic Queue**: Simple message sending/receiving
2. **Work Queues**: Task distribution among workers
3. **RPC Pattern**: Request-reply messaging
4. **Correlation ID**: Matching requests with replies
5. **Express Integration**: RabbitMQ with web servers

## Configuration

Most examples use default RabbitMQ settings:
- **Host**: localhost
- **Port**: 5672
- **Username**: guest
- **Password**: guest

To modify connection settings, update the connection string in each example:
```javascript
amqp.connect('amqp://guest:guest@localhost:5672/', (err, conn) => {
  // ...
});
```

## Troubleshooting

### RabbitMQ Not Running
Ensure RabbitMQ is running:
```bash
docker ps  # Check if RabbitMQ container is running
```

### Connection Refused
Check if RabbitMQ is accessible:
- Verify port 5672 is open
- Check firewall settings
- Ensure correct connection string

### Module Not Found
Install dependencies:
```bash
npm install
```

### Port Already in Use
Change the port in server settings:
```javascript
const SERVER_PORT = 3001;  // Change from 3000
```

## Development

### Project Structure

```
rabbit-mq-learning/
├── tutorial/                           # Official RabbitMQ tutorial examples
│   ├── one/                           # Hello World
│   ├── two/                           # Work Queues
│   └── six/                           # RPC
├── rabbit-RPC-2-servers-test/         # Basic RPC example
│   ├── server_consume/                # RPC server
│   └── server_producer/               # RPC client
├── rabbit-RPC-2-servers-test-full-json/    # JSON-based RPC
│   ├── server_consume/
│   └── server_producer/
├── rabbit-RPC-2-servers-test-full-parameters/  # Parameter-based RPC
│   ├── server_consume/
│   └── server_producer/
└── rabbit-test/                       # Full-stack example
    ├── client/                        # React frontend
    └── server/                        # Node.js backend
```

## Additional Resources

- [RabbitMQ Official Tutorial](https://www.rabbitmq.com/getstarted.html)
- [amqplib Documentation](http://www.squaremobius.net/amqp.node/)
- [RabbitMQ Management Plugin](https://www.rabbitmq.com/management.html)

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
