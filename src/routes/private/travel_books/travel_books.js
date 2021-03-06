var router = require('express').Router();

var travel_books_controller = require('../../../controllers/travel_booksController.js');

router.post('/create', travel_books_controller.travel_books_create);
router.get('/find_all', travel_books_controller.travel_books_get_all);
router.post('/find_by_id', travel_books_controller.get_travel_books_by_id);
router.post('/find_by_country', travel_books_controller.get_travel_books_by_country);
router.post('/update', travel_books_controller.update_travel_books);

module.exports = router;
