const User = require('../models/user.js');

exports.user_create = function(req,res){
  const new_user = User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
      cover: req.body.cover,
      birthdate: req.body.birthdate,
      is_deleted: req.body.isDeleted
  });
  User.findOne({ username: new_user.username}, (err, user) => {
    if (err) {
      res.send(" Erreur : FindOne");
    }
    if(!user){
      User.save_user(new_user, (err, saved_user) =>{
        if (err) {
          res.send(" Erreur : saved user");
        }
        res.json(saved_user);
      });
    } else {
      res.send(" Pas enregistre, existe déjà");
    }
  });
};

exports.get_user_by_id = function(req, res){
  User.show_user_id(req.body.id, (err, showed_user) => {
    if (err){
      res.send(" Erreur : showed_user / doesn't exist");
    }
    res.json(showed_user);
  });
};

exports.get_user_by_email = function(req, res){
  User.show_user_email(req.body.email, (err, showed_user) =>{
    if(err){
      res.send(" Erreur : showed_user (email) ");
    }
    if(showed_user.length != 0){
      res.json(showed_user);
    } else {
      res.send(" Not this email");
    }
  });
};
