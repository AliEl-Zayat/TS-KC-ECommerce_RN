import { createSlice } from '@reduxjs/toolkit';
import { TLoading, TSection } from '@src/types';
import actGetSections from './act/actGetSections';

interface ISectionsState {
  records: TSection[];
  loading: TLoading;
  error: string | null;
}

const initialState: ISectionsState = {
  records: [],
  loading: 'idle',
  error: null,
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actGetSections.pending, state => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(actGetSections.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records = action.payload;
    });
    builder.addCase(actGetSections.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export { actGetSections };

export const {} = sectionsSlice.actions;

export default sectionsSlice.reducer;
