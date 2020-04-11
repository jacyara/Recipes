const express = require('express');
const app = express();
const {port} = require('./config');
const recipeController = require('./controller/recipeRequest');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(port, function() {
  console.log('App listening on port', port);
});

app.get('/recipes', async function(req, res) {
  const recipes = await recipeController.recipe(req);
  res.send(recipes);
});

app.get('/giphy', async function(req, res) {
  console.log(req.query);
  const gif = await recipeController.giphy(req);
  res.send(gif);
});
