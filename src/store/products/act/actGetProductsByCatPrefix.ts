import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProduct } from '@src/types';
import axios from 'axios';

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  'products/actGetProductsByCatPrefix',
  async (prefix: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TResponse>(
        `https://cat-prods-server.glitch.me/products?cat_prefix=${prefix}`,
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

export default actGetProductsByCatPrefix;
