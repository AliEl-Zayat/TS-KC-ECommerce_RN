import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      padding: 12,
      backgroundColor: '#727272',
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    productContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      flex: 1,
    },
    image: {
      width: 100,
      aspectRatio: 1,
      backgroundColor: '#95a3af',
      overflow: 'hidden',
      borderRadius: 12,
    },
    productInfo: {
      alignSelf: 'flex-start',
      gap: 6,
      paddingTop: 10,
      justifyContent: 'space-between',
      flex: 1,
    },
    productPrice: { opacity: 0.7, fontWeight: '700' },
    removeButton: {
      backgroundColor: '#95a3af',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 6,
      padding: 6,
      alignSelf: 'flex-start',
    },
    cartButton: {
      borderWidth: 1,
      borderColor: '#95a3af',
      borderRadius: 8,
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
    },
  });
}
