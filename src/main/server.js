require('dotenv').config();
const app = require('../config/app');
// FIXME
require('../infra/db/mongo/Mongo');

app.listen(process.env.APP_PORT, function() {
  console.log(`Magic happens on ${process.env.APP_PORT}`)
});
