import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { readFileSync } from 'fs';
import path from 'path';

const server = createServer((req, res) => {
  // serve static files from public
  const file = req.url === '/' ? '/index.html' : req.url!;
  try {
    const data = readFileSync(path.join('public', file));
    res.writeHead(200);
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.send(JSON.stringify({ type: 'welcome', msg: 'connected' }));
  ws.on('message', (data) => {
    // echo
    ws.send(data.toString());
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
