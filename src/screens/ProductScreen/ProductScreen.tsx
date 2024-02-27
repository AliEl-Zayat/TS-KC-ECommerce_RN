import { useRoute } from '@react-navigation/native';
import { CartIcon } from '@src/assets/icons';
import { Typography } from '@src/components';
import BackButton from '@src/components/BackButton';
import { Button } from '@src/components/common';
import {
  addToCart,
  itemQuantityAvailabilityCheckingSelector,
} from '@src/store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { TProductScreenRouteProp } from '@src/types';
import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import getStyles from './ProductScreen.styles';

export default function ProductScreen() {
  const styles = getStyles();

  const {
    params: { id, title, img, price, max },
  } = useRoute<TProductScreenRouteProp>();

  const dispatch = useAppDispatch();
  const { quantityReachedToMax, currentRemainingQuantity } = useAppSelector(
    state => {
      return itemQuantityAvailabilityCheckingSelector(
        state.cart.items[id],
        max,
      );
    },
  );

  // const [quantity, setQuantity] = useState(1);
  // const handleQuantity = (action: 'increment' | 'decrement') => {
  //   if (action === 'increment') {
  //     setQuantity(quantity + 1);
  //   } else if (action === 'decrement' && quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  const onAddToCart = () => {
    dispatch(addToCart(id));
    Toast.show({
      type: 'success',
      text1: 'Added to cart',
      text1Style: { fontSize: 14 },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenHeader}>
        <View style={styles.leftSectionContainer}>
          <BackButton />
        </View>
        <View style={styles.screenHeaderCenter}>
          <Typography size={18}>Product Details</Typography>
        </View>
        <View style={styles.rightSectionContainer}></View>
      </View>
      <View style={styles.contentContainer}>
        <Image style={styles.image} resizeMode="cover" source={{ uri: img }} />

        <View style={styles.productInfoContainer}>
          <Typography size={22}>{title}</Typography>
          <Typography size={16} style={{ opacity: 0.7 }}>
            {`${price} EGP`}
          </Typography>
        </View>

        <View style={styles.availabilityContainer}>
          <Typography>
            {quantityReachedToMax
              ? 'You reached to the limit'
              : `You can add ${currentRemainingQuantity} item(s)`}
          </Typography>
        </View>

        <Button
          disabled={quantityReachedToMax}
          style={styles.addToCartButton}
          onPress={onAddToCart}>
          <CartIcon color={'#fff'} width={20} />
          <Typography>Add To Cart</Typography>
        </Button>
      </View>
    </SafeAreaView>
  );
}
