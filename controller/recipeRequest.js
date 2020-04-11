const recipeService = require('../service/recipeService');

async function recipe(req) {
  const ingredients = req.query.i;

  const receita = await recipeService.recipes(ingredients);
  console.log('Receita', receita);
  return receita;
};

async function giphy(req) {
  const recipe = req.query.q;
  console.log('recipe', recipe);
  const gif = await recipeService.giphy(recipe);
  return gif;
};


module.exports = {
  recipe,
  giphy,
};
