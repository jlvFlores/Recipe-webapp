import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 'Top 20 Balanced Recipes',
  isSelected: false,
  search: '',
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setPage: (state, action) => ({ ...state, page: action.payload }),
    setIsSelected: (state, action) => ({ ...state, isSelected: action.payload }),
    setSearch: (state, action) => ({ ...state, search: action.payload }),
  },
});

export const { setPage, setIsSelected, setSearch } = navbarSlice.actions;
export default navbarSlice.reducer;
