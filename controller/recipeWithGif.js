const {recipesWithGifInfo} = require('./recipesWithGifInfo');
const {recipesList} = require('./recipesList');
const {orderSearchedIngredients} = require('./orderIngredients');

async function recipeWithGif(req, res) {
  const ingredients = req.query.i;

  const ingredientsOrdered = orderSearchedIngredients([ingredients]);

  if (ingredientsOrdered.length > 3) {
    res.status(400);
    res.send('Bad Request! Your search can have maximum of 3 itens ');
  }

  const rec = await recipesList(ingredients, res);
  const data = rec.results;

  const recipes = await Promise.all(recipesWithGifInfo(data, res));

  return {'keywords': ingredientsOrdered, recipes};
};

exports.recipeWithGif = recipeWithGif;
