const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Conected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// Run Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));