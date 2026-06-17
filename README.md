# Rabbit Mq Learning

RabbitMQ Learning is a hands-on Node.js project demonstrating distributed messaging with RabbitMQ. It covers producer-consumer queues, work queues, pub/sub, and RPC using correlation IDs and reply queues. It also integrates Express APIs and a React frontend to simulate full-stack message flows.

Built in January 2018, it Examples show how async systems scale, process background jobs, and decouple services using patterns from official RabbitMQ tutorials plus Fibonacci RPC demos. Includes real-world async workflow patterns and scaling insights.

## Features

- 📨 **Basic Message Queue**: Simple producer-consumer pattern
- 🔄 **Work Queues**: Task distribution among multiple workers
- 🔌 **RPC Pattern**: Request-reply messaging implementation
- 🌐 **Express Integration**: RabbitMQ with web servers
- ⚛️ **React Client**: Full-stack example with React frontend
- 🔧 **Multiple Implementations**: JSON-based and parameter-based RPC variations
- 📊 **Fibonacci Calculator**: Practical RPC example for compute-intensive tasks

### Core Capabilities

- **Producer-Consumer Pattern**: Basic message queuing with send/receive operations
- **Work Queue Distribution**: Task distribution among multiple workers with round-robin
- **RPC Implementation**: Request-reply messaging with correlation IDs and reply queues
- **Full-Stack Integration**: React frontend + Express backend + RabbitMQ broker
- **Multiple RPC Variations**: Basic RPC, JSON-based RPC, parameter-based RPC

### Technical Excellence

- **Asynchronous Communication**: Decoupled services through message queues
- **Correlation ID Matching**: Proper request-reply correlation in RPC patterns
- **Reply Queue Management**: Temporary reply queues for RPC clients
- **Fibonacci Calculation Service**: Compute-intensive task demonstration
- **CORS Support**: Cross-origin requests enabled in Express servers

### Developer Experience

- **Docker Support**: Easy RabbitMQ setup with Docker
- **Management UI**: RabbitMQ Management UI on port 15672
- **Multiple Examples**: Tutorial examples + custom implementations
- **Structured Projects**: Each example has its own package.json and dependencies
- **Clear Documentation**: Step-by-step instructions for each example

## Architecture

### Message Queue Flow

```mermaid
graph LR
    A[Producer] -->|Send Message| B[RabbitMQ Queue]
    B -->|Deliver Message| C[Consumer]
    style A fill:#4CAF50
    style B fill:#FF9800
    style C fill:#2196F3
```

### RPC Pattern Flow

```mermaid
sequenceDiagram
    participant Client as RPC Client
    participant Queue1 as Request Queue
    participant Server as RPC Server
    participant Queue2 as Reply Queue

    Client->>Queue1: Send Request (correlation_id)
    Queue1->>Server: Deliver Request
    Server->>Server: Process (e.g., Calculate Fibonacci)
    Server->>Queue2: Send Reply (correlation_id)
    Queue2->>Client: Deliver Reply
    Client->>Client: Match correlation_id & Process
```

### Full-Stack Architecture

```mermaid
graph TB
    A[React Client :3000] -->|HTTP| B[Express Server :3001]
    B -->|AMQP| C[RabbitMQ :5672]
    C -->|AMQP| D[Consumer Server :3002]
    D -->|Compute Result| D
    D -->|AMQP Reply| C
    C -->|AMQP| B
    B -->|HTTP Response| A

    style A fill:#61DAFB
    style B fill:#68A063
    style C fill:#FF6600
    style D fill:#68A063
```

## Getting Started

### Prerequisites

- Node.js (v10 or higher)
- npm or pnpm
- RabbitMQ server (local or Docker)

## Configuration

### RabbitMQ Connection Settings

Most examples use default RabbitMQ settings:

- **Host**: localhost
- **Port**: 5672
- **Management UI Port**: 15672
- **Username**: guest
- **Password**: guest

To modify connection settings, update the connection string in each example:

```javascript
amqp.connect('amqp://guest:guest@localhost:5672/', (err, conn) => {
  // ...
});
```

### Environment Variables (Optional)

You can use environment variables to configure RabbitMQ connections:

```bash
RABBITMQ_URL=amqp://guest:guest@localhost:5672/
RABBITMQ_HOST=localhost
RABBITMQ_PORT=5672
RABBITMQ_USER=guest
RABBITMQ_PASS=guest
```

## Usage

### Running Tutorial Examples

Each tutorial example has its own directory with dedicated scripts:

#### Hello World (Tutorial One)

```bash
# Terminal 1 (Receiver)
cd tutorial/one
npm install
node receive.js

# Terminal 2 (Sender)
cd tutorial/one
node send.js
```

#### Work Queues (Tutorial Two)

```bash
# Terminal 1 (Worker 1)
cd tutorial/two
npm install
node worker.js

# Terminal 2 (Worker 2)
cd tutorial/two
node worker.js

# Terminal 3 (Producer)
cd tutorial/two
node new_task.js
```

#### RPC Pattern (Tutorial Six)

```bash
# Terminal 1 (RPC Server)
cd tutorial/six
npm install
node rpc_server.js

# Terminal 2 (RPC Client)
cd tutorial/six
node rpc_client.js
```

### Running RPC Examples

#### Basic RPC Test

```bash
# Terminal 1 (Consumer/Server)
cd rabbit-RPC-2-servers-test/server_consume
npm install
npm start

# Terminal 2 (Producer/Client)
cd rabbit-RPC-2-servers-test/server_producer
npm install
npm start
```

#### JSON-Based RPC Test

```bash
# Terminal 1 (Consumer/Server)
cd rabbit-RPC-2-servers-test-full-json/server_consume
npm install
npm start

# Terminal 2 (Producer/Client)
cd rabbit-RPC-2-servers-test-full-json/server_producer
npm install
npm start
```

#### Parameter-Based RPC Test

```bash
# Terminal 1 (Consumer/Server)
cd rabbit-RPC-2-servers-test-full-parameters/server_consume
npm install
npm start

# Terminal 2 (Producer/Client)
cd rabbit-RPC-2-servers-test-full-parameters/server_producer
npm install
npm start
```

### Running Full-Stack Example

```bash
# Terminal 1 (Server)
cd rabbit-test/server
npm install
node index.js

# Terminal 2 (Client)
cd rabbit-test/client
npm install
npm start
```

Open browser at: http://localhost:3000

## Available Scripts

### Client-Side Scripts (React)

Located in `rabbit-test/client/package.json`:

```bash
cd rabbit-test/client
npm start    # Start development server
npm build    # Build for production
npm test     # Run tests
```

### Server-Side Scripts (Express/RabbitMQ)

Each server directory has its own scripts:

```bash
# RPC Servers
cd rabbit-RPC-2-servers-test/server_consume
npm start    # Start consumer server

cd rabbit-RPC-2-servers-test/server_producer
npm start    # Start producer client

# Full-Stack Server
cd rabbit-test/server
node index.js  # Start Express server
```

## Architecture Principles

This project follows message-driven architecture principles:

1. **Decoupling**: Services communicate through message queues, not directly
2. **Asynchronous Communication**: Non-blocking request handling
3. **Durability**: Messages persist until processed (where applicable)
4. **Acknowledgment**: Consumers acknowledge message processing
5. **Scalability**: Multiple workers can process tasks in parallel
6. **Request-Reply**: RPC pattern uses correlation IDs for proper matching

## Design Patterns

- **Producer-Consumer**: Basic message queue pattern
- **Work Queue**: Task distribution with round-robin
- **RPC (Remote Procedure Call)**: Request-reply with correlation IDs
- **Reply Queue**: Temporary queues for RPC responses
- **Publisher-Subscriber**: (Not implemented but ready for extension)

## Directory Structure

```
rabbit-mq-learning/
├── tutorial/                           # Official RabbitMQ tutorial examples
│   ├── one/                           # Hello World pattern
│   ├── two/                           # Work Queues pattern
│   └── six/                           # RPC pattern
├── rabbit-RPC-2-servers-test/         # Basic RPC implementation
│   ├── server_consume/                # RPC server (Fibonacci calculator)
│   └── server_producer/               # RPC client (Request sender)
├── rabbit-RPC-2-servers-test-full-json/    # JSON-based RPC
│   ├── server_consume/
│   └── server_producer/
├── rabbit-RPC-2-servers-test-full-parameters/  # Parameter-based RPC
│   ├── server_consume/
│   └── server_producer/
├── rabbit-test/                       # Full-stack integration example
│   ├── client/                        # React frontend application
│   └── server/                        # Node.js backend with RabbitMQ
├── .github/
│   └── rulesets/
├── .vscode/
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── INSTRUCTIONS.md
├── LICENSE
├── README.md
├── SECURITY.md
├── docker-compose.yml
└── knip.json
```

## Development

### Code Style

This project uses ESLint for code quality. Run ESLint in each directory:

```bash
cd rabbit-RPC-2-servers-test/server_consume
npm run lint
```

### Testing

Each example can be tested by running the scripts as described in the Usage section.

### Adding New Examples

To add a new RabbitMQ example:

1. Create a new directory in the project root
2. Add your Node.js scripts
3. Create a package.json with necessary dependencies
4. Document your example in README.md

## Best Practices

### Message Queue Best Practices

1. **Use Connection Pooling**: Reuse AMQP connections where possible
2. **Handle Reconnections**: Implement reconnection logic for network failures
3. **Acknowledge Messages**: Always acknowledge messages after processing
4. **Use Durable Queues**: For critical messages that shouldn't be lost
5. **Limit Prefetch**: Use `prefetch(1)` for fair dispatch in work queues

### RPC Best Practices

1. **Always Use Correlation IDs**: Match requests with replies
2. **Use Unique Reply Queues**: Create temporary queues per RPC client
3. **Set Timeouts**: Implement timeouts for RPC calls
4. **Validate Messages**: Validate incoming RPC requests
5. **Handle Errors**: Proper error handling and error messages

### Security Best Practices

1. **Don't Use Default Credentials**: In production, change guest/guest
2. **Use TLS**: Encrypt AMQP traffic in production
3. **Limit Permissions**: Use least privilege principle for RabbitMQ users
4. **Network Security**: Restrict access to RabbitMQ ports

## Support

For questions, issues, or contributions:

- **GitHub Issues**: [https://github.com/orassayag/rabbit-mq-learning/issues](https://github.com/orassayag/rabbit-mq-learning/issues)
- **Email**: orassayag@gmail.com

### Quick Start with Docker

1. Start RabbitMQ:

```bash
docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

2. Clone and run an example:

```bash
git clone https://github.com/orassayag/rabbit-mq-learning.git
cd rabbit-mq-learning/tutorial/one
npm install
```

3. Run receiver (Terminal 1):

```bash
node receive.js
```

4. Run sender (Terminal 2):

```bash
node send.js
```

### Installation

For detailed setup instructions, see [INSTRUCTIONS.md](INSTRUCTIONS.md).

## Project Structure

```
rabbit-mq-learning/
├── tutorial/                           # Official RabbitMQ tutorial examples
│   ├── one/                           # Hello World pattern
│   ├── two/                           # Work Queues pattern
│   └── six/                           # RPC pattern
├── rabbit-RPC-2-servers-test/         # Basic RPC implementation
│   ├── server_consume/                # RPC server (Fibonacci calculator)
│   └── server_producer/               # RPC client (Request sender)
├── rabbit-RPC-2-servers-test-full-json/    # JSON-based RPC
│   ├── server_consume/                # Server with JSON message handling
│   └── server_producer/               # Client with JSON message handling
├── rabbit-RPC-2-servers-test-full-parameters/  # Parameter-based RPC
│   ├── server_consume/                # Server with parameter handling
│   └── server_producer/               # Client with parameter handling
└── rabbit-test/                       # Full-stack integration example
    ├── client/                        # React frontend application
    └── server/                        # Node.js backend with RabbitMQ
```

## Examples Overview

### Tutorial Examples

#### 1. Hello World (`tutorial/one/`)

The simplest possible messaging: one producer sends a message to a queue, and one consumer receives it.

#### 2. Work Queues (`tutorial/two/`)

Distributing time-consuming tasks among multiple workers. Messages are distributed in a round-robin fashion.

#### 3. RPC Pattern (`tutorial/six/`)

Remote Procedure Call implementation. The client sends a computation request (Fibonacci number) and waits for the reply.

### RPC Server Implementations

#### Basic RPC (`rabbit-RPC-2-servers-test/`)

Simple RPC implementation with Express servers. Demonstrates correlation IDs and reply queues.

#### JSON-Based RPC (`rabbit-RPC-2-servers-test-full-json/`)

Enhanced RPC with JSON message formatting for structured data exchange.

#### Parameter-Based RPC (`rabbit-RPC-2-servers-test-full-parameters/`)

RPC implementation with flexible parameter handling and configuration.

### Full-Stack Example (`rabbit-test/`)

Complete application with:

- React frontend for user interaction
- Express backend API
- RabbitMQ message broker
- Fibonacci calculation service

## Key Concepts Demonstrated

### 1. Message Queuing

Messages are stored in queues until consumers are ready to process them.

### 2. Producer-Consumer Pattern

Producers send messages; consumers receive and process them independently.

### 3. RPC (Remote Procedure Call)

Synchronous-like communication over asynchronous message queues using correlation IDs.

### 4. Correlation ID

Unique identifier to match requests with their corresponding replies in RPC patterns.

### 5. Reply Queue

Temporary queue created for each RPC client to receive responses.

### 6. Work Distribution

Tasks are distributed among multiple workers in a round-robin fashion.

## Built With

- [Node.js](https://nodejs.org) - JavaScript runtime environment
- [RabbitMQ](https://www.rabbitmq.com) - Message broker
- [amqplib](http://www.squaremobius.net/amqp.node/) - AMQP client library
- [Express](https://expressjs.com) - Web framework
- [React](https://reactjs.org) - Frontend library
- [Git](https://git-scm.com) - Version control

## Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the contribution process.

## Versioning

We use [SemVer](http://semver.org) for versioning. For the versions available, see the [tags on this repository](https://github.com/orassayag/rabbit-mq-learning/tags).

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag

## License

This application has an MIT license - see the [LICENSE](LICENSE) file for details.

## Resources

- [RabbitMQ Official Tutorial](https://www.rabbitmq.com/getstarted.html)
- [AMQP 0-9-1 Protocol](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
- [RabbitMQ Management Plugin](https://www.rabbitmq.com/management.html)
- [amqplib Documentation](http://www.squaremobius.net/amqp.node/)

## Acknowledgments

- Built for educational and research purposes
- Respects robots.txt and implements rate limiting
- Uses user-agent rotation to avoid detection
- Implements polite crawling practices
