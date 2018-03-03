var router = require('express').Router();

router.use('/create', require('./user.js'));

module.exports = router;
