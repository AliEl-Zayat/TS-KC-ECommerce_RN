import { StyleSheet } from 'react-native';

const styles = () => {
  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 24,
      columnGap: 4,
      flexDirection: 'row',
    },
    dot: {
      borderRadius: 999,
      width: 16,
      height: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeDot: {
      borderRadius: 999,
      backgroundColor: '#000',
      width: 6,
      height: 6,
    },
  });
};

export default styles;
