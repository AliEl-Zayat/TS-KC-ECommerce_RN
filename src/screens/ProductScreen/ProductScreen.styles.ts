import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {},
    image: {
      height: 300,
      borderRadius: 20,
      overflow: 'hidden',
    },
    productInfoContainer: {
      marginVertical: 20,
      gap: 6,
    },
    contentContainer: {
      paddingHorizontal: 20,
    },
    rightSectionContainer: {
      flex: 1,
    },
    screenHeaderCenter: {
      flex: 1,
      alignItems: 'center',
    },
    leftSectionContainer: {
      flex: 1,
    },
    screenHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
    },

    addToCartButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      borderWidth: 1,
      borderColor: '#95a3af',
      borderRadius: 100,
      paddingVertical: 6,
    },
    availabilityContainer: {
      marginVertical: 20,
    },
  });
}
