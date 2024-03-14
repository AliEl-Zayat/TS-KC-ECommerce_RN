import { createSlice } from '@reduxjs/toolkit';
import { TBanner, TLoading } from '@src/types';
import actGetBanners from './act/actGetBanners';

interface IBannersState {
  records: TBanner[];
  loading: TLoading;
  error: string | null;
}

const initialState: IBannersState = {
  records: [],
  loading: 'idle',
  error: null,
};

const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actGetBanners.pending, state => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(actGetBanners.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records = action.payload;
    });
    builder.addCase(actGetBanners.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export { actGetBanners };

export const {} = bannersSlice.actions;

export default bannersSlice.reducer;
