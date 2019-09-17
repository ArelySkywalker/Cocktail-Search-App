const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useCreateIndex: true 
    })
    .then(() => console.log('MongoDB Conected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));

// Run Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));