const http = require('http');

const name = 'node-hello-world';
const port = '8099';

const app = new http.Server();

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World 2');
  res.end('\n');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`${name} is listening on port ${port}`);
});
