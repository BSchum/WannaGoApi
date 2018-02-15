var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();
app.use('/src/routes', require('./src/routes'));

// A le mettre dans le fichier config/constants
var port = process.env.PORT || 4500;
require('./src/config/mongodb.js');
app.use('/src/routes', require('./src/routes'));
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
