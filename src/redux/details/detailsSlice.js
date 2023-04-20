import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipe: {},
  isLoading: true,
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setRecipe: (state, action) => ({ ...state, recipe: action.payload }),
    setLoading: (state, action) => ({ ...state, isLoading: action.payload }),
  },
});

export const { setRecipe, setLoading } = detailsSlice.actions;
export default detailsSlice.reducer;
