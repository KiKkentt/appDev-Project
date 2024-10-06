const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const {logMiddleWare} = require('./middleware/authMiddleware');

const app = express();

app.use(logMiddleWare);

app.use(bodyParser.json());

app.use('/user', userRoutes);

const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
