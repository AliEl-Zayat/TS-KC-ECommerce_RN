import { createSlice } from '@reduxjs/toolkit';
import { TBanner, TLoading } from '@src/types';
import actGetMightLikeCategories from './act/actGetMightLikeCategories';

interface IMightLikeCategories {
  records: TBanner[];
  loading: TLoading;
  error: string | null;
}

const initialState: IMightLikeCategories = {
  records: [],
  loading: 'idle',
  error: null,
};

const mightLikeCategoriesSlice = createSlice({
  name: 'mightLikeCategories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actGetMightLikeCategories.pending, state => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(actGetMightLikeCategories.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records = action.payload;
    });
    builder.addCase(actGetMightLikeCategories.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export { actGetMightLikeCategories };

export const {} = mightLikeCategoriesSlice.actions;

export default mightLikeCategoriesSlice.reducer;
