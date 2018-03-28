const User = require('../models/user.js');

exports.user_create = function(req,res){

  const new_user = User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
      cover: req.body.cover,
      birthdate: req.body.birthdate,
      isDeleted: req.body.isDeleted
  });

  User.findOne({ username: new_user.username}, (err, user) => {
    if (err) {
      res.send(" Pas enregistre, existe déjà");
    }

    if(!user){
      User.save_user(new_user, (err, saved_user) =>{
        if (err) {
          res.send(" Pas enregistre, existe déjà");
        }
        res.json(saved_user);
      });

    } else {
      res.send(" Pas enregistre, existe déjà");
    }
  });
};
