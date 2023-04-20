import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { store } from './testMockData';

// mock useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

// mock Redux Slice functions
jest.mock('../redux/recipes/recipesSlice', () => ({
  getRecipesRequest: jest.fn(),
}));

test('NavBar component should render', () => {
  useSelector.mockReturnValue({
    page: 'Top 20 Balanced Recipes',
  });
  const { getByAltText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    </Provider>,
  );
  const logoElement = getByAltText(/settings/i);
  expect(logoElement).toBeInTheDocument();
});
