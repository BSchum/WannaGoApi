const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

exports.MongoDBConnexion = function(){
    mongoose.connect('mongodb://' + process.env.DB_USER +
        ':' + process.env.DB_PASSWORD +
        '@' + process.env.DB_HOST +
        ':' + process.env.DB_PORT +
        '/' + process.env.DB_NAME
    );
}
