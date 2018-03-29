const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pic_schema = new Schema({
   place : {
       type: String,
       required: true
   },
   pic : {
     type: String,
     required: true
   },
   is_deleted:{
     type: Boolean,
     default: false
   }
});

const Pic = module.exports = mongoose.model('Pic', pic_schema);

module.exports.save_pic = function (pic, callback) {
  pic.save(callback);
};

module.exports.show_all_pics = function(callback){
  const query = {}
  Pic.find(query, callback);
};
