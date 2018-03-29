const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const user_schema = new Schema({
   username : {
       type: String,
        required: true,
        unique: true
   },
    email : {
       type: String,
        required: true,
        unique: true
   },
    password : {
       type:String
   },
    photo:{
       type: String
    },
    cover:{
       type: String
     },
     birthdate:{
       type: String
     },
     is_deleted:{
       type: Boolean,
       default: false
     }
});

const User = module.exports = mongoose.model('User', user_schema);

module.exports.save_user = function (user, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) throw err;
        user.password = hash;
        user.save(callback);
    });
  });
};

module.exports.show_user_id = function(id, callback){
   User.findById(id, callback);
};

module.exports.show_user_email = function(email, callback){
  User.find({email: email}, callback);
};

module.exports.comparePassword = function(passwordEntered, hashedPassword, callback){
  bcrypt.compare(passwordEntered, hashedPassword, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};

module.exports.show_all_user = function(callback){
  const query = {}
  User.find(query, callback);
};
