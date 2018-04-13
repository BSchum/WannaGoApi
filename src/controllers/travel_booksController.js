const Travel_books = require('../models/travel_books.js');

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