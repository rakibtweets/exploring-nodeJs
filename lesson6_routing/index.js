const http = require('http');
const fs = require('fs');
const port = '5000';

const myServer = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, {
        'content-type': 'text/html',
      });
      res.write(data);
      res.end();
    });
  };

  if (req.url === '/') {
    handleReadFile(200, 'index.html');
  }
  if (req.url === '/about') {
    handleReadFile(200, 'about.html');
  }
  if (req.url === '/contact') {
    handleReadFile(200, 'contact.html');
  }
});

myServer.listen(port, () => {
  console.log('server is running on port: ', port);
});
