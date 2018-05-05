const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const traveler_schema = new Schema({
   profile:{
       type: Schema.Types.ObjectId, ref:'User'
   },
   list_travels_books:[{
     type: Schema.Types.ObjectId, ref:'Travel_books'
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

const Traveler = module.exports = mongoose.model('Traveler', traveler_schema);

module.exports.save_traveler = function (Traveler, callback) {
  Traveler.save(callback);
};

module.exports.get_traveler_by_id = function(id, callback){
   Traveler.findById(id).populate('list_travels_books').exec(callback);;
};

module.exports.get_all_traveler = function(callback){
  const query = {};
  Traveler.find(query).populate('list_travels_books').exec(callback);
}
