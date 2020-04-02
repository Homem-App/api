const router = require('express').Router();

router.use('/v1/pub', require('./v1/pub'));
router.use('/v1/pvt', require('./v1/pvt'));

module.exports = router;