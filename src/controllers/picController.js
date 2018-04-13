const Pic = require('../models/pic.js');

exports.pic_create = function(req,res){
  const new_pic = Pic({
      place: req.body.place,
      pic: req.body.pic
  });
  Pic.save_pic(new_pic, (err, saved_pic) =>{
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    res.json(saved_pic);
  });
};

exports.pic_get_all = function(req, res){
  Pic.show_all_pics((err, showed_pics) => {
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_pics);
  });
};

exports.pic_get_place = function(req, res){
  Pic.show_all_places(req.body.place, (err, showed_pics_place) => {
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_pics_place);
  });
};

exports.update_pic = function(req, res){
  Pic.findByIdAndUpdate(req.body.id, req.body,{new:true}, (err, pic) => {
    if(err) return res.json({status: false, message: 'Erreur update'});
    return res.json({status: true, message: pic});
  });
};
