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

    const { recipe } = recipeData;

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText(recipe.label)).toBeInTheDocument();
    expect(getByAltText(recipe.label)).toBeInTheDocument();
    expect(getByText(`${recipe.ingredients.length} ingredients`)).toBeInTheDocument();
    expect(getByText('See full recipe')).toBeInTheDocument();

    expect(getByText('Calories')).toBeInTheDocument();
    expect(getByText(`${recipe.calories.toFixed(2)} kcal`)).toBeInTheDocument();
    expect(getByText('Ingredients')).toBeInTheDocument();
    expect(getByText(recipe.ingredients.length)).toBeInTheDocument();
    expect(getByText('Total nutrients')).toBeInTheDocument();
    expect(getByText(recipe.totalNutrients.length)).toBeInTheDocument();
    expect(getByText('Diet labels')).toBeInTheDocument();
    expect(getByText(recipe.dietLabels.length)).toBeInTheDocument();
    expect(getByText('Health labels')).toBeInTheDocument();
    expect(getByText(recipe.healthLabels.length)).toBeInTheDocument();
  });
});
