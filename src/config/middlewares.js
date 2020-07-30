const {
  contentType,
  bodyParser,
  cors,
} = require('../main/middlewares');

module.exports = function(app) {
  app.use(contentType);
  app.use(bodyParser);
  app.use(cors);
};
