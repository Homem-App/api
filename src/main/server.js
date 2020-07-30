require('dotenv').config();
const app = require('../config/app');

app.listen(process.env.APP_PORT, function() {
  console.log(`Magic happens on ${process.env.APP_PORT}`)
});
