const http = require('http');
const { hostname } = require('os');
const port = 5050;
const hostName = '127.0.0.01';

const myServer = http.createServer((req, res) => {
  res.end('Hello, I am your first server');
});

myServer.listen(port, hostname, () => {
  console.log(`server in running at https://${hostName}:${port}`);
});
