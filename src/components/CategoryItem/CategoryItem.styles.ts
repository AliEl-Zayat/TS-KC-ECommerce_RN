import {StyleSheet} from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      overflow: 'hidden',
      borderRadius: 100,
    },
    title: {
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  });
}
