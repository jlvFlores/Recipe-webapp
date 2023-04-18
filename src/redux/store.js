import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/recipesSlice';

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default setupStore;
