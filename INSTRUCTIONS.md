# Setup and Usage Instructions

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [System Requirements](#system-requirements)
4. [Install Dependencies](#install-dependencies)
5. [Available Commands](#available-commands)
6. [Development Commands](#development-commands)
7. [Running Scripts](#running-scripts)
8. [Best Practices](#best-practices)
9. [Extending the Application](#extending-the-application)
10. [External Resources](#external-resources)

## Setup Instructions

## Prerequisites

### System Requirements

- **Node.js**: v10 or higher
- **Package Manager**: npm or pnpm
- **Operating System**: Windows, macOS, or Linux
- **Memory**: 512MB RAM minimum (1GB recommended)
- **Disk Space**: 200MB for application and dependencies

### Knowledge Prerequisites

- Basic understanding of command-line/terminal
- Familiarity with JavaScript/Node.js
- Understanding of message queues (helpful but not required)

## Initial Setup

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

## Install Dependencies

Each example has its own dependencies. Install them individually:

```bash
# Tutorial One
cd tutorial/one
npm install

# Tutorial Two
cd ../two
npm install

# Tutorial Six
cd ../six
npm install

# RPC Examples
cd ../../rabbit-RPC-2-servers-test/server_consume
npm install
cd ../server_producer
npm install

# JSON RPC
cd ../../rabbit-RPC-2-servers-test-full-json/server_consume
npm install
cd ../server_producer
npm install

# Parameter RPC
cd ../../rabbit-RPC-2-servers-test-full-parameters/server_consume
npm install
cd ../server_producer
npm install

# Full-Stack Example
cd ../../rabbit-test/client
npm install
cd ../server
npm install
```

## Available Commands

### Tutorial Commands

```bash
# Hello World
cd tutorial/one
node receive.js  # Receiver
node send.js     # Sender

# Work Queues
cd tutorial/two
node worker.js    # Worker
node new_task.js  # Producer

# RPC
cd tutorial/six
node rpc_server.js  # RPC Server
node rpc_client.js  # RPC Client
```

### RPC Server Commands

```bash
# Basic RPC
cd rabbit-RPC-2-servers-test/server_consume
npm start  # Start consumer server

cd ../server_producer
npm start  # Start producer client

# JSON RPC
cd ../../rabbit-RPC-2-servers-test-full-json/server_consume
npm start

cd ../server_producer
npm start

# Parameter RPC
cd ../../rabbit-RPC-2-servers-test-full-parameters/server_consume
npm start

cd ../server_producer
npm start
```

### Full-Stack Commands

```bash
# React Client
cd rabbit-test/client
npm start  # Development server
npm build  # Production build
npm test   # Run tests

# Express Server
cd ../server
node index.js  # Start server
```

## Development Commands

### Code Linting

Some examples include ESLint configuration:

```bash
cd rabbit-RPC-2-servers-test/server_consume
npm run lint
```

### Management UI

Access the RabbitMQ Management UI at http://localhost:15672 (username: guest, password: guest) to monitor queues, connections, and messages.

## Running Scripts

### Step-by-Step Guide for Each Example

See detailed instructions in the [README.md](README.md) file for each example.

## Best Practices

### Development Best Practices

1. **Start RabbitMQ First**: Always ensure RabbitMQ is running before starting your examples
2. **Install Dependencies**: Run `npm install` in each directory before running scripts
3. **Use Multiple Terminals**: Open separate terminals for producers, consumers, and servers
4. **Monitor with Management UI**: Use the RabbitMQ Management UI to debug queue issues
5. **Clean Up**: Stop containers/processes when done to free up resources

### Message Queue Best Practices

1. **Handle Connection Errors**: Always handle connection errors in your code
2. **Close Connections**: Properly close AMQP connections when done
3. **Use Acknowledgments**: Always acknowledge messages after processing
4. **Test with Small Data**: Start with simple messages before complex data
5. **Document Your Queues**: Keep track of queue names and purposes

## Extending the Application

### Adding New Examples

1. Create a new directory in the project root
2. Add your Node.js scripts
3. Create a package.json with amqplib and other dependencies
4. Document your example in both README.md and INSTRUCTIONS.md

### Adding New Features

To add new features (e.g., pub/sub, topics, headers):

1. Choose the appropriate RabbitMQ pattern
2. Create new files in an existing or new directory
3. Update documentation
4. Test thoroughly

## External Resources

- [RabbitMQ Official Tutorial](https://www.rabbitmq.com/getstarted.html)
- [AMQP 0-9-1 Protocol Documentation](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
- [amqplib Documentation](http://www.squaremobius.net/amqp.node/)
- [RabbitMQ Management Plugin](https://www.rabbitmq.com/management.html)
- [Docker Hub - RabbitMQ](https://hub.docker.com/_/rabbitmq)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)

---

## Last Updated

June 2026

## Version

1.0.0

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
const SERVER_PORT = 3001; // Change from 3000
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

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
