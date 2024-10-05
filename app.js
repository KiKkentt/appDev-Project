const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

const app = express();


app.use(bodyParser.json());

// User routes
app.use('/user', userRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
