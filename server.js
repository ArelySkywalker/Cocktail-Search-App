const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Conected...'))
    .catch(err => console.log(err));

// Run Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));