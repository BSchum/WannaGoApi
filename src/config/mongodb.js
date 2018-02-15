var dotenv = require('dotenv').config();;
var mongoose = require ('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://' + process.env.DB_USER +
    ':' + process.env.DB_PASSWORD +
    '@' + process.env.DB_HOST +
    ':' + process.env.DB_PORT +
    '/' + process.env.DB_NAME);
