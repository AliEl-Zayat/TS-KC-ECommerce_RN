import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: '#303e4e',
      bottom: 10,
      right: 20,
      left: 20,
      borderRadius: 32,
      paddingVertical: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
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
