var router = require('express').Router();

router.use('/user',require('./user/index.js'));
router.use('/pic',require('./pic/index.js'));
router.use('/day', require('./day/index.js'));

module.exports = router;
