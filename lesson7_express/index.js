const { app, router } = require('./app');
const port = 5000;
const userRouter = require('./Routes/users.route');

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('Home page route');
});

app.use((req, res) => {
  res.send('<h1>Page Not Found: 404</h1>');
});

app.listen(port, () => {
  console.log('App is running on port', port);
});
