const jwt = require('jsonwebtoken');
const jwt_secret = 'testKey';
const rateLimit = require('express-rate-limit');

const RateLimiter = rateLimit({
    windowMs: 30 * 1000, // 30 secs
    max: 5, // 5 requests only
    message: 'Too many requests from this IP, please try again after a minute',
    standardHeaders: true,
    legacyHeaders: false,
    skipFailedRequests: true,
    handler: (req, res) => {
        res.status(429).json({ message: "Too many requests. Please try again later..." });
    },
});

function logMiddleWare(req, res, next){
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
}

// Function for verifying the token
function authenticateToken(req, res, next) {
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

module.exports = {RateLimiter, logMiddleWare, authenticateToken};