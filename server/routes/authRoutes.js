const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

// Log in a user
router.post('/login', login);

module.exports = router;
