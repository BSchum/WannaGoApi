var User =require('../models/user.js');
var bodyParser = require('body-parser');

exports.user_create = function(req,res){
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var date = req.body.date;
  var photo = req.body.photo

  saveUser(username, password, email, date, photo, req, res);
};

var saveUser = function (username, password, email, date,photo, req, res) {
  User
    .findOne({username: req.body.username})
    .exec(function(err, user){
      if(!user){
        var user = User({
            username: username,
            email: email,
            password: password,
            photo: photo
        });
        user
            .save();
      } else{
        res.end();
      }
    })
};
