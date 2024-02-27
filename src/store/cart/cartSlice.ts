import { createSlice } from '@reduxjs/toolkit';
import { TProduct } from '@src/types';
import {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
} from './selectors/index';

interface ICartState {
  items: { [key: string]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (id in state.items) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    clearCart: state => {
      state.items = {};
    },
  },
});

export {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
};

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
