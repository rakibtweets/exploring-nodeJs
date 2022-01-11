const http = require('http');
const { hostname } = require('os');
const port = 5050;
const hostName = '127.0.0.01';

const myServer = http.createServer((req, res) => {
  res.writeHead(201, {
    'content-type': 'text/html',
  });
  res.write('<h1>Hellow</h1>');
  res.end();
});

myServer.listen(port, hostname, () => {
  console.log(`server in running successfully at https://${hostName}:${port}`);
});
