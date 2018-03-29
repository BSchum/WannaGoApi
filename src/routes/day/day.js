var router = require('express').Router();

var day_controller = require('../../controllers/dayController.js');

router.post('/create', day_controller.day_create);

module.exports = router;
