import React from 'react';

import getStyles from './SectionItem.styles';
import { Image, View } from 'react-native';
import { TSection } from '@src/types';
import { Typography } from '..';

const SectionItem = ({ title, img, discount }: TSection) => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      {discount ? (
        <View style={styles.badge}>
          <Typography size={10}>{discount + '% off'}</Typography>
        </View>
      ) : null}
      <Image source={{ uri: img }} style={styles.image} />
      <Typography>{title}</Typography>
    </View>
  );
};

export default SectionItem;
