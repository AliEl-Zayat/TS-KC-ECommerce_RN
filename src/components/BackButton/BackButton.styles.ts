import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#fff',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      width: 40,
      height: 40,
      overflow: 'hidden',
    },
  });
}
