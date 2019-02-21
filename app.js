// load environment variables unless in production
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.load();
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// access request body on POST and PUT requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// tell express where views and public are via absolute paths
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

const port = 3000;

const todoRoutes = require('./routes/todos');

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
});