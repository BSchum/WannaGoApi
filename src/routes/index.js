var router = require('express').Router();

router.use('/auth', require('./auth/index.js'));

router.use('/', require('./private/index.js'));

module.exports = router;
