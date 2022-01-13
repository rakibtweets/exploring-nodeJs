const { app, router } = require('../app');


router.get('/register', (req, res) => {
  res.send('<h1>please Register</h1>');
});
router.get('/login', (req, res) => {
  res.send('Please login');
});
router.delete('/', (req, res) => {
  res.send('delete Express');
});

module.exports = router;
