import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Details from '../components/Details';
import { store, recipeData } from './testMockData';

// mock useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Details component', () => {
  it('Displays a loading message when isLoading is true', () => {
    useSelector.mockReturnValue({
      recipes: recipeData.recipes,
      recipe: recipeData.recipe,
      isLoading: true,
    });

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText('Loading details...')).toBeInTheDocument();
  });

  it('Displays the recipe information', () => {
    useSelector.mockReturnValue({
      recipes: recipeData.recipes,
      recipe: recipeData.recipe,
      isLoading: false,
    });

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText(recipeData.recipe.label)).toBeInTheDocument();
    expect(getByText('FULL RECIPE BELOW')).toBeInTheDocument();
    expect(getByText('See full recipe')).toBeInTheDocument();
    expect(getByText('Ingredients')).toBeInTheDocument();
    expect(getByText(recipeData.recipe.ingredients[0].text)).toBeInTheDocument();
    expect(getByText('Nutrition')).toBeInTheDocument();
    expect(getByText(`Energy: ${recipeData.recipe.totalNutrients[0].quantity.toFixed(2)}${recipeData.recipe.totalNutrients[0].unit}`)).toBeInTheDocument();
  });
});
