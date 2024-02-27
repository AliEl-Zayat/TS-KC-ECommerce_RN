import React from 'react';
import {View, Text} from 'react-native';
import getStyles from './Header.styles';
import {Typography} from '@src/components';
import {HeaderBasket} from '@src/components/ecommerce';

export default function Header() {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Typography size={26}>our</Typography>
        <View style={styles.logoSpan}>
          <Typography size={26}>eCom</Typography>
        </View>
      </View>
      <HeaderBasket />
    </View>
  );
}
