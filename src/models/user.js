var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_schema = new Schema({
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
       default: true
     }
});

module.exports = mongoose.model('User', user_schema);

module.exports.save_user = function (user, callback) {
  user.save(callback);
};
