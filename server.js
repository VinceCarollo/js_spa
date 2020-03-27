require('dotenv').config(); // read .env files
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on %d', port);
});