import { AddIcon, MinusIcon } from '@src/assets/icons';
import React from 'react';
import { Image, View } from 'react-native';
import Typography from '../Typography';
import { Button } from '../common';
import getStyles from './CartItem.styles';

type TCartItem = {
  id: number;
};

export default function CartItem({}: TCartItem) {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image style={styles.image} />
        <View style={styles.productInfo}>
          <Typography>Product Name</Typography>
          <Typography style={styles.productPrice}>Product Price</Typography>
          <Button style={styles.removeButton}>
            <Typography>Remove</Typography>
          </Button>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Button
          style={styles.cartButton}
          onPress={() => {
            handleQuantity('increment');
          }}>
          <AddIcon color={'#fff'} width={25} />
        </Button>
        <Typography>{1}</Typography>
        <Button
          style={styles.cartButton}
          onPress={() => {
            handleQuantity('decrement');
          }}>
          <MinusIcon color={'#fff'} width={25} />
        </Button>
      </View>
    </View>
  );
}
