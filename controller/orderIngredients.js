const orderIngredients = (ingredients) => {
  ingredients = ingredients[0].split(', ');

  return ingredients.sort();
};

const orderSearchedIngredients = (ingredients) => {
  ingredients = ingredients[0].split(',');

  return ingredients.sort();
};

module.exports = {
  orderIngredients,
  orderSearchedIngredients,
};


