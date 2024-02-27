import { useNavigation } from '@react-navigation/native';
import { TStackParamListNavigationProp } from '@src/types';

export const useAppNavigation = () => {
  const navigation = useNavigation<TStackParamListNavigationProp>();
  return navigation;
};
