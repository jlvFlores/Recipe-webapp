import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store, recipeData } from './testMockData';
import Home from '../components/Home';

// mock useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

// mock Redux Slice functions
jest.mock('../redux/recipes/recipesSlice', () => ({
  getRecipesRequest: jest.fn(),
}));

describe('Home component and Children components', () => {
  it('displays a loading message when loading', () => {
    useSelector.mockReturnValue({
      recipes: recipeData.recipes,
      isLoading: true,
    });

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText('Loading recipes...')).toBeInTheDocument();
  });

  it('renders the Home component and child components correctly', () => {
    useSelector.mockReturnValue({
      recipes: recipeData.recipes,
      isLoading: false,
      search: '',
    });

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText('Number of ingredients required')).toBeInTheDocument();
    expect(getByAltText(/Fiadone/i)).toBeInTheDocument();
    expect(getByText('Fiadone')).toBeInTheDocument();
    expect(getByAltText(/Fish and Chips/i)).toBeInTheDocument();
    expect(getByText('Fish and Chips')).toBeInTheDocument();
  });
});
