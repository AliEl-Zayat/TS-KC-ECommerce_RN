import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TCategory = {
  id?: number;
  title: string;
  prefix: string;
  img: string;
};

export type TProduct = {
  id: number;
  title: string;
  price: number;
  cat_prefix?: string;
  img: string;
  quantity?: number;
  max?: number;
};

export type TLoading = 'idle' | 'pending' | 'succeeded' | 'failed';

export type TStackParamList = {
  Home: undefined;
  Categories: undefined;
  Products: TCategory;
  Product: TProduct;
  Cart: undefined;
};

export type TProductsScreenRouteProp = RouteProp<TStackParamList, 'Products'>;
export type TProductScreenRouteProp = RouteProp<TStackParamList, 'Product'>;
export type TCartScreenRouteProp = RouteProp<TStackParamList, 'Cart'>;

export type TStackParamListNavigationProp = NativeStackNavigationProp<
  TStackParamList,
  'Home'
>;
