import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    contentContainerStyle: {
      gap: 20,
    },
  });
}
