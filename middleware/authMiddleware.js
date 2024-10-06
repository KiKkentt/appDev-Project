const jwt = require('jsonwebtoken');
const jwt_secret = 'testKey';

// Function for verifying the JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({message: 'Token required'});
    }

    jwt.verify(token, jwt_secret, (err, user) => {
        if (err) {
            return res.status(403).json({message: 'Invalid token'});
        }


        // Debug purposes rani which displays the user.
        req.user = user;
        next();
    });
}

module.exports = {authenticateToken};