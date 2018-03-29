const Pic = require('../models/pic.js');

exports.pic_create = function(req,res){
  const new_pic = Pic({
      place: req.body.place,
      pic: req.body.pic
  });
  Pic.save_pic(new_pic, (err, saved_pic) =>{
    if (err) {
      res.send(" Erreur : saved pic");
    }
    res.json(saved_pic);
  });
};
