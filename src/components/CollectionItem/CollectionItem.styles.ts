import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      width: 295,
      height: 300,
      alignItems: 'center',
      justifyContent: 'flex-end',
      overflow: 'hidden',
      borderRadius: 10,
      gap: 15,
    },
    button: {
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderRadius: 999,
      paddingVertical: 12,
      paddingHorizontal: 12,
    },
  });
}
