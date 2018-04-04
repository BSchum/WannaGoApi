var router = require('express').Router();

var day_controller = require('../../../controllers/dayController.js');

router.post('/create', day_controller.day_create);
router.post('/update', day_controller.update_day);

module.exports = router;
