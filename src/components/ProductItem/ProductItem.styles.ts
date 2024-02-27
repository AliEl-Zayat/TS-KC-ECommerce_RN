import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width - 40;

export default function getStyles() {
  return StyleSheet.create({
    productImage: {
      height: screenWidth / 2 - 34,
      borderRadius: 12,
      overflow: 'hidden',
    },
    container: {
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: '#0c0c0c',
      padding: 12,
      gap: 12,
      width: (screenWidth - 20) / 2,
    },
    productInfo: {
      flex: 1,
      gap: 6,
    },
    productName: {
      fontSize: 16,
    },
    productPrice: {
      opacity: 0.5,
    },
  });
}
