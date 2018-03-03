var User =require('../models/user.js');
var bodyParser = require('body-parser');

exports.user_create = function(req,res){
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var photo = req.body.photo;
  var cover = req.body.cover;
  var birthdate = req.body.birthdate;
  var isDeleted = req.body.isDeleted;

  saveUser(username, password, email, photo, cover, birthdate, isDeleted, req, res);
};

var saveUser = function (username, password, email, photo, cover, birthdate, isDeleted, req, res) {
  User
    .findOne({username: req.body.username})
    .exec(function(err, user){
      if(!user){
        var user = User({
            username: username,
            email: email,
            password: password,
            photo: photo,
            cover: cover,
            birthdate: birthdate,
            isDeleted: isDeleted
        });
        user.save();
        res.json(user);
      } else{
        res.send(" Pas enregistre, existe déjà");
      }
    })
};
