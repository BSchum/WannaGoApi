const User = require('../models/user.js');
const validator = require('validator');

exports.user_create = function(req,res){
  if (validator.isEmail(req.body.email)) {
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
        res.json({status: false, message: 'Erreur'});
      }
      if(!user){
        User.save_user(new_user, (err, saved_user) =>{
          if (err) {
            res.json({status: false, message: 'Erreur'});
          }
          res.json(saved_user);
        });
      } else {
        res.json({status: false, message: 'Already exist'});
      }
    });
  } else {
    res.json({status: false, message: 'Please provide a valid email and try again.'})
  }
};
