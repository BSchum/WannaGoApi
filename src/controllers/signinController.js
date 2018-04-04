const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');


exports.user_signin = function(req,res){
  var email = req.body.email;
  var password = req.body.password;

  if (validator.isEmail(email)) {
    User.get_user_by_email(email, (err, user) => {

      if (err) throw err;

      if (!user) {
        res.json({status: false, message: 'Could not find a user with the email: ' + email + '.'});
      } else {
        User.comparePassword(password, user.password, (err, isMatch) => {

          if (err) throw err;

          if (!isMatch) {
            res.json({status: false, message: 'You provided a wrong password. Please try again.'});
          } else {
            // Generate token
            const user_details = {
              _id: user._id,
              username: user.username,
              email: user.email,
              photo: user.photo,
              cover: user.cover,
              birthdate: user.birthdate
            };
            // user.toObject()  #Permet de mettre l'objet dans la création du payload
            const token =jwt.sign(user_details, process.env.SECRET);

            res.json({status: true, message: user.firstname + ' has logged in successfully.', token:token, user: {
              id: user._id,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              country: user.country
            }});

          }

        });
      }
    });

  } else {
    res.json({status: false, message: 'Please provide a valid email and try again.'});
  }
};
