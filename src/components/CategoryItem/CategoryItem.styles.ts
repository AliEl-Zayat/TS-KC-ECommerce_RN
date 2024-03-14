import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 11,
      marginVertical: 10,
      borderRadius: 6,
    },
    title: {
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    activeButton: {
      backgroundColor: '#dddddd73',
    },
  });
}
