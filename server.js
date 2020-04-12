const express = require('express');
const app = express();
const {port} = require('./config');
const recipeController = require('./controller/recipeWithGif');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, function() {
    console.log('App listening on port', port);
  });
}

app.get('/recipes', async function(req, res) {
  await recipeController.recipeWithGif(req, res);
});

module.exports = app;
