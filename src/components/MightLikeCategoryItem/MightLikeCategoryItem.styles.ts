import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default function getStyles() {
  return StyleSheet.create({
    container: {
      borderRadius: 16,
      overflow: 'hidden',
      height: 229,
      width: width / 2 - 30,
      justifyContent: 'flex-end',
    },
    button: {
      borderRadius: 999,
      backgroundColor: '#fff',
      alignSelf: 'center',
      bottom: 15,
    },
    buttonTitle: {
      color: '#000',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      padding: 10,
    },
  });
}
