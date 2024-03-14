import { Dimensions, StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      height: Dimensions.get('window').height / 2,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
    },
    imageContainer: {
      height: Dimensions.get('window').height / 2,
      width: Dimensions.get('window').width,
      backgroundColor: 'red',
      overflow: 'hidden', // Hide any overflowing content
      position: 'absolute',
    },
    image: {
      backgroundColor: 'blue',
      width: 800,
      height: '100%',
      position: 'absolute', // Position the image absolutely within its container
      right: -100, // Align the image to the right of its container
    },
    bannerTitlteAndButtonContainer: {
      marginStart: 32,
      gap: 10,
    },
    bannerTitle: { color: '#000', marginStart: 16 },
    bannerButton: {
      backgroundColor: '#000',
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 22,
      alignSelf: 'flex-start',
    },
  });
}
