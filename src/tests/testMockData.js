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
    label: 'Fiadone',
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
};

export { store, recipeData };
