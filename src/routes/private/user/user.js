var router = require('express').Router();

var user_controller =require('../../../controllers/userController.js');

router.post('/find_by_id', user_controller.get_user_by_id);
router.get('/profil', user_controller.get_current_user);
router.post('/find_by_email', user_controller.get_user_by_emaill);
router.get('/find_all', user_controller.get_all_user);
router.post('/update', user_controller.update_user);
router.post('/find_by_username', user_controller.get_user_by_username);

module.exports = router;
