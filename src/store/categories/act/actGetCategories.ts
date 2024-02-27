import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCategory } from '@src/types';
import axios from 'axios';

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  'categories/actGetCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TResponse>(
        'https://cat-prods-server.glitch.me/category',
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

export default actGetCategories;
