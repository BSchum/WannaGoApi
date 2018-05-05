const Traveler = require('../models/traveler.js');


exports.traveler_create = function(req,res){
  const new_traveler = Traveler({
      profile: req.body.profile,
      list_travels_books: req.body.list_travels_books
  });
  Traveler.save_traveler(new_traveler, (err, saved_traveler) =>{
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    res.json(saved_traveler);
  });
};

exports.get_traveler_by_id = function(req, res){
  Traveler.get_traveler_by_id(req.body.id, (err, showed_traveler) => {
    if (err){
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_traveler);
  });
};

exports.get_all_traveler = function(req, res){
  Traveler.get_all_traveler((err, showed_traveler) => {
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_traveler)
  });
};
