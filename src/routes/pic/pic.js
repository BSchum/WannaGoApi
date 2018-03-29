var router = require('express').Router();

var pic_controller = require('../../controllers/picController.js');

router.post('/create', pic_controller.pic_create);

module.exports = router;
