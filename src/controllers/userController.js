var User = require('../models/user.js');
var bodyParser = require('body-parser');//TODO - Pas besoin de body parser c'est un middleware qui est deja utilisé.

//TODO- Envoie un objet avec toutes ces données : function(user, res) user : req.body (avec toutes les datas du user)
exports.user_create = function(req,res){
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var photo = req.body.photo;
  var cover = req.body.cover;
  var birthdate = req.body.birthdate;
  var isDeleted = req.body.isDeleted;
  // TODO- Plus besoin de toutes ces variables. 
  // NAMING - Soit on utilise le snake_case soit le camelCase et le PascalCase mais faut choisir. je vote snake_case<--- FULL SNAKE_CASE
  saveUser(username, password, email, photo, cover, birthdate, isDeleted, req, res);
  //A appeller via le model
};
// TODO - Comportement du model
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
