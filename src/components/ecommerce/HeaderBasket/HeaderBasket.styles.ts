import {StyleSheet} from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    badge: {
      position: 'absolute',
      top: -6,
      right: -6,
      borderRadius: 10,
      backgroundColor: '#78c3e8',
      width: 16,
      height: 16,
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {width: 32, height: 32},
  });
}
