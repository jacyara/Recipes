const {giphyURL} = require('./giphyURL');
const {orderIngredients} = require('./orderIngredients');

const recipesWithGifInfo = (data, res) => {
  return data.map(async (item) => {
    return {
      'title': item.title,
      'ingredients': orderIngredients([item.ingredients]),
      'link': item.href,
      'gif': await giphyURL(item.title, res),
    };
  });
};

exports.recipesWithGifInfo = recipesWithGifInfo;
