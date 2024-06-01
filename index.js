const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    //! Remove cors problem
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//* Test Route
app.get('/', (req, res, next) => {
    res.send('Server is running');
})

//* CRUD Routes
app.use('/users', require('./routes/users'));

//* Error Handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;

    res.status(status).json({ message: message });
});

//* Sync database
sequelize
    .sync()
    .then( result => {
        console.log('Database connected');
        app.listen(3000);
    })
    .catch(err => console.log(err));
