import React from 'react';
import { View, Image } from 'react-native';
import getStyles from './ImageTitleSubtitle.styles';
import Typography from '../Typography';

type TImageTitleSubtitle = {
  img: string;
  title: string;
  subtitle: string;
};

export default function ImageTitleSubtitle({
  img,
  title,
  subtitle,
}: TImageTitleSubtitle) {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.titleSubtitleContainer}>
        <Typography style={styles.title}>{title}</Typography>
        <Typography style={styles.subtitle}>{subtitle}</Typography>
      </View>
    </View>
  );
}
