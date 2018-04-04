const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travel_books_schema = new Schema({
   titre : {
       type: String,
       required: true
   },
   date : {
     type: String,
     required: true
   },
   description:{
     type: String,
     default: false
   },
   pays:{
     type: String,
     required: true
   },
   list_days:[{
     type: Schema.Types.ObjectId, ref:'Day'
   }],
   is_deleted:{
     type: Boolean,
     default: false
   }
});

const Travel_books = module.exports = mongoose.model('Travel_books', travel_books_schema);
