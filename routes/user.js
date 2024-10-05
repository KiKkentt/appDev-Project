const express = require('express');
const router = express.Router();
//const { register } = require('../controllers/userController');

// Register the user
//router.post('/register', register);
router.post('/register', (req, res) => {
    res.json({ message: 'User registered' });
});

module.exports = router;