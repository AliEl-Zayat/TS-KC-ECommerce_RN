import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: height * 0.24,
    },
    item: {
      width: width - 8 - 18 * 2,
      marginHorizontal: 4,
    },
    flatList: {
      width: '100%',
    },
    flatListContainer: {
      flex: 1,
    },
  });
};

export default styles;
