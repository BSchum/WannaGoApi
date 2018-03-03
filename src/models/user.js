var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   username : {
       type: String,
        required: true
   },
    email : {
       type: String,
        required: true
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

var User = mongoose.model('User', userSchema);
module.exports = User;
