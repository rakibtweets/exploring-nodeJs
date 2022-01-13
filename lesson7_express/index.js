const { app, router } = require('./app');
const port = 5000;
const userRouter = require('./Routes/users.route');

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/Views/index.html');
});

app.use('/register', (req, res) => {
  // res.status(200).json({
  //   name: 'Rakib Hasan',
  //   message: 'I am register Page',
  //   statusCode: 200,
  // });

  res.status(200);
  res.sendFile(__dirname + '/views/register.html');
});
app.use('/login', (req, res) => {
  // res.cookie('Name', 'Rakib');
  // res.cookie('age', '25');
  res.clearCookie('Name');
  res.append('id', '130');
  res.end();
});

app.use((req, res) => {
  res.send('<h1>Page Not Found: 404</h1>');
});

app.listen(port, () => {
  console.log('App is running on port', port);
});
