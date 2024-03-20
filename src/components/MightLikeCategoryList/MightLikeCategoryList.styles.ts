import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionWrapper: { marginTop: 30 },
    sectionHeader: { textAlign: 'center' },
    flatList: { marginTop: 22 },
    contentContainer: { paddingHorizontal: 15, gap: 15 },
    paginationContainer: {
      alignSelf: 'center',
      marginTop: 15,
      flexDirection: 'row',
      gap: 6,
    },
  });
}
