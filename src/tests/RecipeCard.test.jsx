import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store, recipeData } from './testMockData';
import RecipeCard from '../components/RecipeCard';

const { recipe } = recipeData;

test('Should render the RecipeCard component', () => {
  const { getByAltText, getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <RecipeCard
          key={recipe.key}
          id={recipe.key}
          name={recipe.label}
          image={recipe.images.SMALL.url}
          ingredientsCount={recipe.ingredients.length}
        />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByAltText('see details')).toBeInTheDocument();
  expect(getByAltText(recipe.label)).toBeInTheDocument();
  expect(getByText(recipe.label)).toBeInTheDocument();
  expect(getByText(recipe.ingredients.length)).toBeInTheDocument();
});
