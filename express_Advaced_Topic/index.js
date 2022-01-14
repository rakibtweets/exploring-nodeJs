const express = require('express');
const logger = require('./Middlewares/Logger.middleware');
const app = express();
const port = 5000;

//middle-ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create middleware function and use it
app.use(logger)

//home route
app.get('/', (req, res) => {
  res.send('Middle ware tuitorial server is running');
});

app.listen(port, () => {
  console.log('Server is running on port ', port);
});
