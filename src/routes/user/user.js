var router = require('express').Router();

var user_controller =require('../../controllers/userController.js');

router.post('/create', user_controller.user_create);

router.post('/show', user_controller.get_user_by_id);

router.post('/find_by_email', user_controller.get_user_by_email);

module.exports = router;
