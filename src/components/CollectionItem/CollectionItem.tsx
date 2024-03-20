import React from 'react';

import { TBanner } from '@src/types';
import { ImageBackground, View } from 'react-native';
import { Typography } from '..';
import { Button } from '../common';
import getStyles from './CollectionItem.styles';

const CollectionItem = ({ title, img }: TBanner) => {
  const styles = getStyles();
  return (
    <ImageBackground source={{ uri: img }} style={styles.container}>
      <View>
        <Typography size={18}>{title}</Typography>
      </View>
      <Button onPress={() => {}} style={styles.button}>
        <Typography style={{ color: '#000' }}>Shop now</Typography>
      </Button>
    </ImageBackground>
  );
};

export default CollectionItem;
