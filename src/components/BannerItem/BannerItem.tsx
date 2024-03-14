import React from 'react';
import { Image, View } from 'react-native';

import getStyles from './BannerItem.styles';
import { TBanner } from '@src/types';
import { Typography } from '..';
import { Button } from '../common';
import { ArrowRight2 } from 'iconsax-react-native';

const BannerItem = ({ img, title }: TBanner) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.image} />
      </View>
      <View style={styles.bannerTitlteAndButtonContainer}>
        <Typography size={34} style={styles.bannerTitle}>
          {title}
        </Typography>
        <Button onPress={() => {}} style={styles.bannerButton}>
          <Typography>Shop collection</Typography>
          <ArrowRight2 color="#ffffff" size={16} />
        </Button>
      </View>
    </View>
  );
};

export default BannerItem;
