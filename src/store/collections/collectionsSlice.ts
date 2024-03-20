import { createSlice } from '@reduxjs/toolkit';
import { TBanner, TLoading } from '@src/types';
import actGetCollections from './act/actGetCollections';

type TCollectionsState = {
  records: TBanner[];
  loading: TLoading;
  error: string | null;
};

const initialState: TCollectionsState = {
  records: [],
  loading: 'idle',
  error: null,
};

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actGetCollections.pending, state => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(actGetCollections.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records = action.payload;
    });
    builder.addCase(actGetCollections.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export { actGetCollections };

export const {} = collectionsSlice.actions;

export default collectionsSlice.reducer;
