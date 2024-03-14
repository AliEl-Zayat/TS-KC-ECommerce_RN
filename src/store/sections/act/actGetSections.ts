import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSection } from '@src/types';
import axios from 'axios';

type TResponse = TSection[];

const actGetSections = createAsyncThunk(
  'categories/actGetSections',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TResponse>(
        'https://express-ts-server-lyart.vercel.app/sections',
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

export default actGetSections;
