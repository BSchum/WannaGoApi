const router = require('express').Router();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

router.use('/auth', require('./auth/index.js'));


router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      console.log('token : '+ token + ' SECRET : ' + process.env.SECRET);
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

router.use('/', require('./private/index.js'));

module.exports = router;
