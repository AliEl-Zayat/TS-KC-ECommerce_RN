import { useAppNavigation } from '@src/hooks/useAppNavigation';
import { TProduct } from '@src/types';
import React from 'react';
import { Image, View } from 'react-native';
import Typography from '../Typography';
import { Button } from '../common';
import getStyles from './ProductItem.styles';

export default function ProductItem({ id, img, title, price, max }: TProduct) {
  const styles = getStyles();

  const { navigate } = useAppNavigation();

  return (
    <Button
      onPress={() => {
        navigate('Product', { id, title, price, img, max });
      }}
      style={styles.container}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Typography style={styles.productName}>{title}</Typography>
        <Typography style={styles.productPrice}>
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'EGP',
          })}
        </Typography>
      </View>
    </Button>
  );
}
