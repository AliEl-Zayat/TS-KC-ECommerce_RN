import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 8,
    },
    badge: {
      position: 'absolute',
      zIndex: 1,
      backgroundColor: '#000000',
      paddingVertical: 2,
      paddingHorizontal: 5,
      top: 0,
      left: 0,
      borderRadius: 999,
    },
    image: {
      width: 60,
      height: 60,
      aspectRatio: 1,
      borderRadius: 999,
      overflow: 'hidden',
    },
  });
}
