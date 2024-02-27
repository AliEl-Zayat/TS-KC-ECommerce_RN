import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    itemSeparator: { height: 20 },
    container: {
      flex: 1,
    },
    categoryImage: {
      width: 40,
      height: 40,
      aspectRatio: 1,
      borderRadius: 40,
    },
    columnWrapperStyle: {
      justifyContent: 'space-between',
    },
    contentContainerStyle: {
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingStart: 20,
    },
  });
}
