import React from 'react';
import { View } from 'react-native';
import getStyles from './Header.styles';
import { HeaderBasket } from '@src/components/ecommerce';
import { HambergerMenu, SearchNormal1 } from 'iconsax-react-native';
import Logo from '@src/assets/icons/Logo';
import Button from '../Button';

export default function Header() {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <View style={styles.menuIconContainer}>
        <Button onPress={() => {}}>
          <HambergerMenu size="32" color="#ffffff" />
        </Button>
      </View>
      <View style={styles.logo}>
        <Logo color="#fff" />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => {}}>
          <SearchNormal1 size="20" color="#ffffff" />
        </Button>
        <HeaderBasket />
      </View>
    </View>
  );
}
