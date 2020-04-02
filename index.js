require('dotenv').config()
const express = require('express');

const app = express();

app.use(require('./src/app/routes'));

app.listen(process.env.APP_PORT, () => {
  console.log(`Listen on port ${process.env.APP_PORT}`)
})