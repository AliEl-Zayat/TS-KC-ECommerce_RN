import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    section: { marginTop: 30 },
    sectionHeading: { alignItems: 'center' },
    sectionHeadingTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 10,
    },
    sectionHeadingSubtitle: {
      textAlign: 'center',
      opacity: 0.8,
    },
  });
}
