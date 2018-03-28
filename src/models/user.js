var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
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
     isDeleted:{
       type: Boolean
     }
});

module.exports = mongoose.model('User', userSchema);

module.exports.save_user = function (user, callback) {
  user.save(callback);
};
