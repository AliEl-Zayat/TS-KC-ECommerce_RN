import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    header: {
      marginStart: 20,
      marginBottom: 20,
      backgroundColor: '#0c0c0c',
      alignSelf: 'flex-start',
      padding: 10,
      borderRadius: 8,
    },
  });
}
