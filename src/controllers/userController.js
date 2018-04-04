const User = require('../models/user.js');

exports.get_user_by_id = function(req, res){
  User.get_user_by_id(req.body.id, (err, showed_user) => {
    if (err){
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_user);
  });
};

exports.get_current_user = function(req, res){
  User.get_current_user(req.user._id, (err, showed_user) => {
    if(err){
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_user);
  });
};

exports.get_user_by_emaill = function(req, res){
  User.get_user_by_email(req.body.email, (err, showed_user) =>{
    if(err){
      res.json({status: false, message: 'Erreur'});
    }
    if(showed_user){
      res.json(showed_user);
    } else {
      res.json({status: false, message: 'Erreur email'});;
    }
  });
};

exports.get_all_user = function(req, res){
  User.show_all_user((err, showed_users) => {
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_users);
  });
};

exports.update_user = function(req, res){
  User.findByIdAndUpdate(req.user._id, req.body,{new:true}, (err, user) => {
    if(err) return res.json({status: false, message: 'Erreur update'});
    return res.json({status: true, message: user});
  });
};
