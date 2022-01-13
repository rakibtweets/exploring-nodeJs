const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

//importing
const userRouter = require('./Routes/users.route');

//middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//users Router
app.use(userRouter);

app.get('/', (req, res) => {
  res.send('hello from server');
});

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Page not found 404:',
  });
});

app.listen(port, () => {
  console.log('server is running on port', port);
});
