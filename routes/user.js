const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// Register the user
//router.post('/register', registerUser);
router.post('/register', (req, res) => {
    res.json({ message: 'User registered' });
  });

module.exports = router;