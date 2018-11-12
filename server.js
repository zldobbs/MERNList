const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// body-parser midddleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB connection established'))
    .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

// starting the app
// notice the use of backtics here to display the port const inline
app.listen(port, () => console.log(`Server started on port ${port}`));