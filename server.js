var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();

app.use(bodyParser.json())
app.use('/', require('./src/routes/index.js'));

// A le mettre dans le fichier config/constants
var port = process.env.PORT || 4500;
require('./src/config/mongodb.js');
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
