const { Router } = require('express');
const { adaptRoute } = require('../adapter/express-route-adapter');
const articleFactory = require('../factories/article');

const router = new Router();
router.get('/article', adaptRoute(articleFactory.index));

module.exports = function(app) {
  app.use(router);
}; 