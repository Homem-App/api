const express = require('express');
const setupRoute = require('./route');
const setupMiddlewares = require('./middlewares');

const app = express();
setupRoute(app);
setupMiddlewares(app);

module.exports = app;