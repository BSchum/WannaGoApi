const Day = require('../models/day.js');

exports.day_create = function(req,res){
  const new_day = Day({
      title: req.body.title,
      description: req.body.description,
      list_pics: req.body.list_pics
  });
  Day.save_day(new_day, (err, saved_day) =>{
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    res.json(saved_day);
  });
};

exports.update_day = function(req, res){
  req.body.updatedAt = new Date();
  Day.findByIdAndUpdate(req.body.id, req.body,{new:true}, (err, day) => {
    if(err) return res.json({status: false, message: 'Erreur update'});
    return res.json({status: true, message: day});
  });
};
