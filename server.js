const express = require('express');
const app = express();
const {port} = require('./config');
const recipeController = require('./controller/recipeWithGif');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(port, function() {
  console.log('App listening on port', port);
});

app.get('/recipes', async function(req, res) {
  const recipes = await recipeController.recipeWithGif(req, res);
  res.send(recipes);
});
