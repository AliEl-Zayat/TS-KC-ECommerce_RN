import {StyleSheet} from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    logo: {flexDirection: 'row', alignItems: 'center', gap: 6},
    logoSpan: {
      backgroundColor: '#5cc5ec',
      borderRadius: 4,
      paddingVertical: 4,
      paddingHorizontal: 6,
    },
  });
}
