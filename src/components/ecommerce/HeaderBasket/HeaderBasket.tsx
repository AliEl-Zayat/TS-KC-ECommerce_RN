import { CartIcon } from '@src/assets/icons';
import { Typography } from '@src/components';
import { Button } from '@src/components/common';
import { useAppNavigation } from '@src/hooks/useAppNavigation';
import { getCartTotalQuantitySelector } from '@src/store/cart/selectors';
import { useAppSelector } from '@src/store/hooks';
import React from 'react';
import { View } from 'react-native';
import getStyles from './HeaderBasket.styles';

export default function HeaderBasket() {
  const styles = getStyles();
  const { navigate } = useAppNavigation();
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <Button
      onPress={() => {
        navigate('Cart');
      }}>
      <View style={styles.badge}>
        <Typography size={14}>{String(totalQuantity)}</Typography>
      </View>
      <CartIcon color="#fff" width={25} />
    </Button>
  );
}
