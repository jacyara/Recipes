const recipeService = require('../service/recipeService');

const recipesList = async (ingredients, res) => {
  let recipesList;
  try {
    recipesList = await recipeService.recipes(ingredients);
  } catch (error) {
    res.status(error.response.status);
    res.send('There is a problem with communication with RecipePuppy :(');
  }
  return recipesList;
};

exports.recipesList = recipesList;
