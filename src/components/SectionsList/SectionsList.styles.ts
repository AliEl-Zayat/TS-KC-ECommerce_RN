import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionsList: { gap: 16, paddingVertical: 16, paddingHorizontal: 16 },
    sectionsListContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
