const Day = require('../models/day.js');

exports.day_create = function(req,res){
  const new_day = Day({
      title: req.body.title,
      description: req.body.description,
      list_pics: req.body.list_pics
  });
  Day.save_day(new_day, (err, saved_day) =>{
    if (err) {
      res.send(" Erreur : saved day");
    }
    res.json(saved_day);
  });
};
