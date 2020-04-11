const router = require('express').Router();
const FeedController = require('../../../controllers/FeedController');

router.get('/feed', FeedController.listAll);
router.post('/feed', FeedController.create);


module.exports = router;