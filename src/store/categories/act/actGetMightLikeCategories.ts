import { createAsyncThunk } from '@reduxjs/toolkit';
import { TBanner } from '@src/types';
import axios from 'axios';

type TResponse = TBanner[];

const actGetMightLikeCategories = createAsyncThunk(
  'mightLikeCategories/actGetMightLikeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TResponse>(
        'https://express-ts-server-lyart.vercel.app/mightLikeCategories',
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue('An error occurred');
    }
  },
);

export default actGetMightLikeCategories;
