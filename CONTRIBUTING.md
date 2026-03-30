# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/rabbit-mq-learning/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Error messages (if applicable)
   - Your environment details (OS, Node version, RabbitMQ version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **JavaScript (Node.js)** with ES6+ syntax
- **ESLint** for code quality
- Consistent formatting and naming conventions

Before submitting:
```bash
# Test your changes
npm test

# Check for linting errors (if configured)
npm run lint
```

### Coding Standards

1. **Clear naming**: Use descriptive names for variables and functions
2. **Error handling**: Include proper error handling in callback functions
3. **Console logging**: Add informative console messages for debugging
4. **Comments**: Add comments for complex logic or RabbitMQ-specific patterns
5. **Consistency**: Follow the existing code structure in the project

### Adding New Examples

When adding new RabbitMQ examples:
1. Create a new directory under the appropriate category (e.g., `tutorial/`, `rabbit-RPC-*/`)
2. Include both producer and consumer implementations
3. Add a `package.json` with necessary dependencies
4. Document the example purpose and usage in comments
5. Update the main README.md with the new example

### Testing Your Changes

1. Ensure RabbitMQ is running locally:
   ```bash
   docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Test the producer and consumer separately
4. Verify messages are sent and received correctly

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
