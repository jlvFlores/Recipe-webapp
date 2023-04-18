import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../apiKeys.json';

const initialState = {
  recipes: [],
  isLoading: true,
  error: null,
};

export const getRecipesRequest = createAsyncThunk('recipes/getRecipesRequest', async () => {
  const search = '';
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${api.app_id}&app_key=${api.app_key}&diet=balanced&random=true`;

  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRecipesRequest.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(getRecipesRequest.fulfilled, (state, action) => {
        const objArray = action.payload.hits.map((hit) => {
          const key = hit.recipe.uri;
          const removeText = 'http://www.edamam.com/ontologies/edamam.owl#';
          return ({ ...hit.recipe, key: key.replace(removeText, '') });
        });
        return ({
          ...state,
          recipes: objArray,
          isLoading: false,
        });
      })
      .addCase(getRecipesRequest.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        isLoading: false,
      }));
  },
});

export default recipesSlice.reducer;
