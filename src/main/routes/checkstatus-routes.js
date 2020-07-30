const { Router } = require('express');
const { adaptRoute } = require('../adapter/express-route-adapter');
const checkStatus = require('../../presentation/controller/CheckStatus');

const router = new Router();
router.get('/checkstatus', adaptRoute(checkStatus.index));

module.exports = function(app) {
  app.use(router);
}; 