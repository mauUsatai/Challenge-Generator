const path = require('path');

const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

app.use(router);

app.use('/', (req, res) => {
  return res.status(404).send('<h1>Page not found</h1>');
});

module.exports = app;