const users = require('../Models/users.model');
const path = require('path');

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + '/../Views/index.html'));
};

exports.postUsers = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const profession = req.body.profession;
  const user = {
    name,
    age,
    profession,
  };

  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
};
