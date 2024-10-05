const {findUserByName, addUser} = require('../models/userModel'); // get data from mock database
const jwt = require('jsonwebtoken');

// Secret key for the token
const jwt_secret = 'testKey'; // dummy key for now

// POST /register
function register(req, res){
    const {username, password, email} = req.body;

    if (!username || !password || !email){
        return res.status(400).json({message: 'Fill-in all Fields!'});
    } // Makes sure that all fields are inputted

    if (findUserByName(username)) {
        return res.status(400).json({message: 'User already exists'});
    } // Checks to see if the user already exists


    // Creates user and places them to the mock database
    const newUser = {username, password, email};
    addUser(newUser);

    return res.status(201).json({message: 'Registered successfully'});
}


// POST /login
function login(req, res) {
    const {username, password} = req.body;
    const user = findUserByName(username);

    if (!user || user.password !== password) {
        return res.status(401).json({message: 'Invalid username or password'});
    }// Check password and if user exists




    const token = jwt.sign({id: user.id, username: user.username}, jwt_secret, {expiresIn: '1h'});


    return res.status(200).json({message: 'Login successful', token}); // user is there para debug sa
}

module.exports = {register, login};