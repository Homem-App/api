const router = require('express').Router();

router.get('/user', (req, res, next) => {
  res.status(200).json({
    data: 'bixao'
  })
})

module.exports = router;