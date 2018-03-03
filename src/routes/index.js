var router = require('express').Router();

router.use('/user',require('./user/index.js'));

module.exports = router;
