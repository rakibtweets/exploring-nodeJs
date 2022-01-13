const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.json());

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  console.log(req);

  res.send(`<h1>My name is ${fullName}. My age is ${age}</h1>`);
});

app.listen(port, () => {
  console.log('server is running on port', port);
});
