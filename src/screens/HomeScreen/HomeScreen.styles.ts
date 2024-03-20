import { Platform, StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: { paddingBottom: Platform.OS === 'ios' ? 60 : 120 },
  });
}
