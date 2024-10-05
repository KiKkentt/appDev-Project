const fs = require('fs');
const path = require('path');

const usersFPath = path.join(_dirname, '../data/users.json');

function getUsers(){
    const data = fs.readFileSync(usersFPath);
    return JSON.parse(data);
}

function findUserByName(username){
    const users = getUsers();
    return users.find(user => user.username === username);
}

function addUser(user){
    const users = getUsers();
    user.id = users.length + 100;
    users.push(user);
    fs.writeFileSync(usersFPath, JSON.stringify(users, null, 2));
}

module.exports = {findUserByName, addUser};