const express = require('express');
const { getUserProfile } = require('../controllers/userController');
const router = express.Router();

// GET USER PROFILE
router.get('/profile', getUserProfile);

module.exports = router;
