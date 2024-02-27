import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    image: {
      width: 40,
      height: 40,
      aspectRatio: 1,
      borderRadius: 40,
    },
    titleSubtitleContainer: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      textTransform: 'uppercase',
    },
    subtitle: {
      opacity: 0.5,
    },
  });
}
