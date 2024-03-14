import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      justifyContent: 'center',
    },
    logoSpan: {
      backgroundColor: '#5cc5ec',
      borderRadius: 4,
      paddingVertical: 4,
      paddingHorizontal: 6,
    },
    buttonsContainer: {
      flex: 1 / 3,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      justifyContent: 'flex-end',
    },
    menuIconContainer: {
      flex: 1 / 3,
    },
  });
}
