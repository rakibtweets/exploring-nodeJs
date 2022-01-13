const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

//middleWare
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Views/index.html');
});
// cicle page
app.get('/circle', (req, res) => {
  res.sendFile(__dirname + '/Views/circle.html');
});
app.post('/circle', (req, res) => {
  const radius = req.body.radius;
  const area = (Math.PI * radius * radius).toFixed(02);
  res.send(`<h2>Area of a circle : ${area}</h2>`);
});
//triangle page
app.get('/triangle', (req, res) => {
  res.sendFile(__dirname + '/Views/triangle.html');
});
app.post('/triangle', (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * height * base;
  res.send(`<h2>area of triangle is: ${area}</h2>`);
});

app.listen(port, () => {
  console.log('server is running on port', port);
});
