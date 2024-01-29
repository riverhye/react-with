const express = require('express');
const router = express.Router();

const userController = require('./CUser');

router.post('/login', userController.login);

module.exports = router;
