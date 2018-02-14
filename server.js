var express = require('express');
const app = express();

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
