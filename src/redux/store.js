import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/recipesSlice';
import detailsReducer from './details/detailsSlice';
import navbarReducer from './navbar/navbarSlice';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  details: detailsReducer,
  navbar: navbarReducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default setupStore;
