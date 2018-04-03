const router = require('express').Router();

const signup_controller = require('../../controllers/signupController.js');
const signin_controller = require('../../controllers/signinController.js');

router.post('/sign_up', signup_controller.user_create);

router.post('/sign_in', signin_controller.user_signin);

module.exports = router;
