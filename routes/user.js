const express = require('express');
const router = express.Router();
const {register, login, getProfile} = require('../controllers/userController');
const {authenticateToken} = require('../middleware/authMiddleware');

// Register and login
router.post('/register', register);
router.post('/login', login);


// Protected profile pathroute
router.get('/profile', authenticateToken, getProfile);


module.exports = router;