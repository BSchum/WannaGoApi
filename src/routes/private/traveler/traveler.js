var router = require('express').Router();

var traveler_controller =require('../../../controllers/travelerController.js');

router.post('/create', traveler_controller.traveler_create);
router.post('/find_by_id', traveler_controller.get_traveler_by_id);
router.post('/find_by_username', traveler_controller.get_traveler_by_username);

module.exports = router;
