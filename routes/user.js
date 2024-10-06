const express = require('express');
const router = express.Router();
const {register, login, getProfile} = require('../controllers/userController');
const {authenticateToken, RateLimiter} = require('../middleware/authMiddleware');

// Register and login
router.post('/register', register);
router.post('/login', login);


// Protected profile pathroute
router.get('/profile', RateLimiter, authenticateToken, getProfile);


module.exports = router;