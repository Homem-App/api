const { Router } = require('express')
const fg = require('fast-glob');

const setupRoute = (app) => {
  const router = Router();
  app.use('/api', router);
  fg.sync('**/src/main/routes/**routes.js')
    .map(async (routeFile) => {
      const route = (await require(`../../${routeFile}`));
      route(router);
    })
}

module.exports = setupRoute;