const recipeService = require('../service/recipeService');

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({data: {
      data: [{gif: 'Mexican food'}],
    }})),
  };
});

test('Giphy test', async (done) => {
  const recipe = {recipe: 'Omelete', ingredients: 'avocado, onions'};
  const gif = {gif: 'Mexican food'};
  const giphy = await recipeService.giphy('onions,tomato,avocado');

  expect(giphy).not.toMatchObject(recipe);
  expect(giphy).toMatchObject(gif);
  done();
});
