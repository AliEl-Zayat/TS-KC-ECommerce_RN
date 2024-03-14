import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import cart from './cart/cartSlice';
import categories from './categories/categoriesSlice';
import products from './products/productsSlice';
import sections from './sections/sectionsSlice';
import banners from './banners/bannersSlice';

const cartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
  whiteList: ['items'],
};

const rootReducer = combineReducers({
  categories,
  products,
  sections,
  banners,
  cart: persistReducer(cartPersistConfig, cart),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { persistor, store };
