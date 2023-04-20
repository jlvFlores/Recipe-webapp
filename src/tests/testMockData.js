// mock Redux store
const store = {
  getState: () => ({}),
  dispatch: () => {},
  subscribe: () => {},
};

// mock recipe data
const recipeData = {
  recipes: [
    {
      key: 'recipe_1',
      label: 'Fiadone',
      url: 'https://www.edamam.com/recipe/fiadone-recipe-1',
      images: { SMALL: { url: 'https://www.edamam.com/web-i' } },
      ingredients: [{ foodId: '1', text: '1/2 cup sugar' }, { foodId: '2', text: '3 eggs' }],
      totalNutrients: [
        {
          label: 'Energy',
          quantity: 196.30800000000002,
          unit: 'kcal',
        },
        {
          label: 'Fat',
          quantity: 7.387,
          unit: 'kcal',
        },
      ],
    },
    {
      key: 'recipe_2',
      label: 'Fish and Chips',
      url: 'https://www.edamam.com/recipe/fiadone-recipe-1',
      images: { SMALL: { url: 'https://www.edamam.com/web-i' } },
      ingredients: [{ foodId: '1', text: '1 fish' }, { foodId: '2', text: '2 potatos' }],
      totalNutrients: [
        {
          label: 'Energy',
          quantity: 400.308,
          unit: 'kcal',
        },
        {
          label: 'Fat',
          quantity: 10.5,
          unit: 'kcal',
        },
      ],
    },
  ],
  recipe: {
    key: 'recipe_1',
    calories: 196.30800000000002,
    dietLabels: ['Low-Carb', 'Low-Fat', 'Low-Sodium'],
    healthLabels: ['Sugar-Conscious', 'Peanut-Free', 'Tree-Nut-Free', 'Alcohol-Free', 'Immuno-Supportive'],
    label: 'Fiadone',
    url: 'https://www.edamam.com/recipe/fiadone-recipe-1',
    images: { SMALL: { url: 'https://www.edamam.com/web-i' } },
    ingredients: [{ foodId: '1', text: '1/2 cup sugar' }, { foodId: '2', text: '3 eggs' }],
    totalNutrients: [
      {
        label: 'Energy',
        quantity: 196.30800000000002,
        unit: 'kcal',
      },
      {
        label: 'Fat',
        quantity: 7.387,
        unit: 'kcal',
      },
      {
        label: 'Trans',
        quantity: 0.02318,
        unit: 'g',
      },
      {
        label: 'Sugars',
        quantity: 0.7143999999999999,
        unit: 'g',
      },
    ],
  },
};

export { store, recipeData };
