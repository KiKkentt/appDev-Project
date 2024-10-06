const jwt = require('jsonwebtoken');
const jwt_secret = 'testKey';

// Function for verifying the token
function authenticateToken(req, res, next) {

    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({message: 'Missing Token! Please provide'});
    }

    jwt.verify(token, jwt_secret, (err, user) => {
        if (err) {
            return res.status(403).json({message: 'Invalid token'});
        }

        req.user = user;
        next();
    });
}


module.exports = {authenticateToken};