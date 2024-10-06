const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/userController');
const {authenticateToken} = require('../middleware/authMiddleware');

// Register the user
router.post('/register', register);

//debug purposes
// router.post('/register', (req, res) => {
//     res.json({ message: 'User registered' });
// });

router.post('/login', login);


// Protected profile pathroute
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Profile info', user: req.user 
  });
});



module.exports = router;