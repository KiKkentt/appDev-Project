const { findUserByUsername, addUser } = require('../models/userModel'); // get data from mock database

// POST /register
function register(req, res) {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Fill-in all Fields!' });
    } // Makes sure that all fields are inputted

    if (findUserByUsername(username)) {
        return res.status(400).json({ message: 'User already exists' });
    } // Checks to see if the user already exists


    // Creates user and places them to the mock database
    const newUser = { username, password, email };
    addUser(newUser);

    return res.status(201).json({ message: 'User registered successfully' });
}

module.exports = {register}