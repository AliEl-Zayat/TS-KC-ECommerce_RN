import React from 'react';

import { TBanner } from '@src/types';
import { ImageBackground } from 'react-native';
import { Typography } from '..';
import { Button } from '../common';
import getStyles from './MightLikeCategoryItem.styles';

const MightLikeCategoryItem = ({ title, img }: TBanner) => {
  const styles = getStyles();
  return (
    <ImageBackground source={{ uri: img }} style={styles.container}>
      <Button onPress={() => {}} style={styles.button}>
        <Typography style={styles.buttonTitle}>{title}</Typography>
      </Button>
    </ImageBackground>
  );
};

export default MightLikeCategoryItem;
