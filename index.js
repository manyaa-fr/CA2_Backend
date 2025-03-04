const mongoose = require('mongoose');
const express = require('express');
const schema = require('./models/schema');
const app = express();

const port = 3000;
app.use(express.json());

app.get ('/', (req, res) => {
    res.json ("server");
});

app.post('/signup', (req, res) => {
    const {username, email, password, dateOfBirth} = req.body;

    if ( !username ) {
        res.status(400).json("Username cannot be empty");
    }
    else if ( !email ){
        res.status(400).json("Email cannot be empty");
    }
    else if ( password.length > 16 || password.length < 8 ){
        res.status(400).json("Password length should be greater than 8 or less than or equal to 16");
    }

    try {
        const user = ({username, email, password, dateOfBirth});
        const userData = schema.create(user);
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});