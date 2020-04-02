const router = require('express').Router();

router.use(require('./hello.routes'));
router.use(require('./user.routes'));


module.exports = router;