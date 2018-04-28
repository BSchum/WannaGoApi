const Travel_books = require('../models/travel_books.js');
const Traveler = require('../models/traveler.js');

exports.travel_books_create = function(req,res){
  const new_travel_books = Travel_books({
      titre: req.body.titre,
      date: req.body.date,
      description: req.body.description,
      pays: req.body.pays
  });
  Travel_books.save_travel_books(new_travel_books, (err, saved_travel_books) =>{
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    // On ajoute le carnet de voyage a la liste de carnet du voyageur
    Traveler.findOneAndUpdate(
      { 'profile': req.user._id },
      { $push: {list_travels_books: saved_travel_books}},
      function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
        }
    });
    res.json(saved_travel_books);
  });
};

exports.travel_books_get_all = function(req, res){
  Travel_books.show_all_travel_books((err, showed_travel_books) => {
    if (err) {
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_travel_books);
  });
};

exports.get_travel_books_by_id = function(req, res){
  Travel_books.get_travel_books_by_id(req.body.id, (err, showed_travel_books) => {
    if (err){
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_travel_books);
  });
};

exports.get_travel_books_by_country = function(req, res){
  Travel_books.get_travel_books_by_country(req.body.country, (err, showed_travel_books) => {
    if (err){
      res.json({status: false, message: 'Erreur'});
    }
    res.json(showed_travel_books);
  });
};

exports.update_travel_books = function(req, res){
  req.body.updatedAt = new Date();
  Travel_books.findByIdAndUpdate(req.body.id, req.body,{new:true}, (err, travel_books) => {
    if(err) return res.json({status: false, message: 'Erreur update'});
    return res.json({status: true, message: travel_books});
  });
};
