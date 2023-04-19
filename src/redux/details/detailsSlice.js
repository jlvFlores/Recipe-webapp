import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipe: {},
  page: 'Top 20 Balanced Recipes',
  isLoading: true,
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setRecipe: (state, action) => ({ ...state, recipe: action.payload }),
    setPage: (state, action) => ({ ...state, page: action.payload }),
    setLoading: (state, action) => ({ ...state, isLoading: action.payload }),
  },
});

export const { setRecipe, setPage, setLoading } = detailsSlice.actions;
export default detailsSlice.reducer;
