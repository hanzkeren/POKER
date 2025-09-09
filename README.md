# POKER

This repository contains a minimal scaffold for a Texas Hold'em style game. It includes a simple Node.js websocket server and a placeholder HTML5 frontend. The implementation is incomplete and meant as a starting point for further development.

## Development

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Start the dev server:

```bash
npm run build
npm start
```

Open http://localhost:8080 in a browser to view the placeholder table.

## Docker

Build and run using Docker:

```bash
docker build -t poker .
docker run -p 8080:8080 poker
```

## License

MIT
