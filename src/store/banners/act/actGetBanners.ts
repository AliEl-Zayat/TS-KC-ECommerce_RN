import { createAsyncThunk } from '@reduxjs/toolkit';
import { TBanner } from '@src/types';
import axios from 'axios';

type TResponse = TBanner[];

const actGetBanners = createAsyncThunk(
  'categories/actGetBanners',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TResponse>(
        'https://express-ts-server-lyart.vercel.app/banners',
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

export default actGetBanners;
