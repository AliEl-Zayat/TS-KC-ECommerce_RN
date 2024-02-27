import { Typography } from '@src/components';
import BackButton from '@src/components/BackButton';
import CartItem from '@src/components/CartItem';
import { FlatList } from '@src/components/common';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './CartScreen.styles';

export default function CartScreen() {
  const styles = getStyles();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <BackButton />
        </View>
        <Typography style={{ alignSelf: 'center' }} size={22}>
          Cart
        </Typography>
        <View style={{ flex: 1 }}></View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <CartItem {...item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
}
