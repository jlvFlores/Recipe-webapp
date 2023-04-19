import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/recipesSlice';
import detailsReducer from './details/detailsSlice';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  details: detailsReducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default setupStore;
