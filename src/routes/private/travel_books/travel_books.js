var router = require('express').Router();

var travel_books_controller = require('../../../controllers/travel_booksController.js');

router.post('/create', travel_books_controller.travel_books_create);
router.get('/find_all', travel_books_controller.travel_books_get_all);

module.exports = router;
