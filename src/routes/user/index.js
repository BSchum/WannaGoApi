var router = require('express').Router();

router.use('/create', require('./create.js'));

module.exports = router;
