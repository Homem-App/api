const router = require('express').Router();
const HelloController = require('../../../controllers/HelloController');

router.get('/hello', HelloController.getHello)

module.exports = router;