const log = function (req, res, next) {
  console.log('Logging...'); // req.body
  next(); // use to pass controll to the next middleware function
};

module.exports = log;
