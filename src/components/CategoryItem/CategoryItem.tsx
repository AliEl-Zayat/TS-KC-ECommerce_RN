import React from 'react';
import { Image } from 'react-native';
import getStyles from './CategoryItem.styles';
import { TCategory } from '@src/types';
import { Typography } from '@components/index';
import { Button } from '@components/common';
import { useAppNavigation } from '@src/hooks/useAppNavigation';

export default function CategoryItem({ id, title, img, prefix }: TCategory) {
  const { navigate } = useAppNavigation();
  const styles = getStyles();

  return (
    <Button
      style={styles.container}
      onPress={() => {
        navigate('Products', { id, img, title, prefix });
      }}>
      <Image style={styles.image} source={{ uri: img }} resizeMode="cover" />
      <Typography style={styles.title}>{title}</Typography>
    </Button>
  );
}
