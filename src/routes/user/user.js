var router = require('express').Router();

var user_controller =require('../../controllers/userController.js');

router.post('/', user_controller.user_create);

router.get('/', function(req,res){
  res.send('test');
});

module.exports = router;
