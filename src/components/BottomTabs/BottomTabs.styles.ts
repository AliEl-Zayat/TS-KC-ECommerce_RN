import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: '#000',
      bottom: 0,
      right: 0,
      left: 0,
      paddingTop: 12,
      paddingBottom: 28,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      shadowColor: '#fff',
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowOpacity: 10,
      shadowRadius: 15,
      elevation: 10,
    },
    tabButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabButtonText: {
      color: 'rgba(255, 255, 255, 0.5)',
    },
    activeTabButtonText: {
      color: '#fff',
    },
  });
}
