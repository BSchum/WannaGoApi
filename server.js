var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var DB = require('./src/HELPER/database.js')

const app = express();
DB.MongoDBConnexion();

app.use(bodyParser.json());
app.use('/', require('./src/routes/index.js'));

// A le mettre dans le fichier config/constants
var port = process.env.PORT || 4500;

// Listening to the servers
app.listen(port, err => {
  if (err) {
    throw err;
  } else {
    console.log(
      `Server running in PORT : ${port}`
    );
  }
});
