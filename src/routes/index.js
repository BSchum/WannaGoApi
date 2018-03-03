var router = require('express').Router();
//TODO - User ne doit pas etre dans un DOSSIER
router.use('/user',require('./user/index.js'));

module.exports = router;
