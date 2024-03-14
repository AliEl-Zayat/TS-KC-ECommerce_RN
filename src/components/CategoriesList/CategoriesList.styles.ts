import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    categoriesList: { gap: 16 },
    categoriesListContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: '#2e2e2e',
      borderBottomColor: '#2e2e2e',
      height: 68,
    },
  });
}
