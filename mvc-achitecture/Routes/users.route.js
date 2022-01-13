const express = require('express');
const { getUsers, postUsers } = require('../Controllers/users.controller');
const router = express.Router();

//users get
router.get('/users', getUsers);

//users post
router.post('/users', postUsers);

module.exports = router;
