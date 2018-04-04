var router = require('express').Router();

var pic_controller = require('../../../controllers/picController.js');

router.post('/create', pic_controller.pic_create);

router.get('/find_all', pic_controller.pic_get_all);

router.post('/find_by_place', pic_controller.pic_get_place);

module.exports = router;
