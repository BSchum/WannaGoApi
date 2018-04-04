var router = require('express').Router();

var user_controller =require('../../../controllers/userController.js');

router.post('/find_by_id', user_controller.get_user_by_id);

router.post('/find_by_email', user_controller.get_user_by_emaill);

router.get('/find_All', user_controller.get_all_user);

module.exports = router;
