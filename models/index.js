const mongoose = require('mongoose');

// see error messages
mongoose.set('debug', true);

mongoose.connect(process.env.DB_URI);

// allows us to use the Promise syntax
mongoose.Promise = Promise;

// 
module.exports.Todo = require('./todo')