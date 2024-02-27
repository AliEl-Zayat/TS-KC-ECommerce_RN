import {StyleSheet} from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      marginVertical: 20,
      marginHorizontal: 20,
      height: 200,
      backgroundColor: '#ff0',
      borderRadius: 12,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 20,
    },
  });
}
