const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const day_schema = new Schema({
   title : {
       type: String,
       required: true
   },
    description: {
     type: String,
     required: true
   },
   list_pics:[{
     type: Schema.Types.ObjectId, ref:'Pic'
   }],
   is_deleted:{
     type: Boolean,
     default: false
   },
   createdAt:{
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt:{
   type: Date,
   required: true,
   default: Date.now
 }
});

const Day = module.exports = mongoose.model('Day', day_schema);

module.exports.save_day = function (day, callback) {
  day.save(callback);
};
