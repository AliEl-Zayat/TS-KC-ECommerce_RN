import { Button } from '@components/common';
import { StackActions } from '@react-navigation/native';
import { useAppNavigation } from '@src/hooks/useAppNavigation';
import {
  Bag2,
  Heart,
  Menu,
  Profile,
  SearchNormal1,
} from 'iconsax-react-native';
import React from 'react';
import { View } from 'react-native';
import Typography from '../Typography';
import getStyles from './BottomTabs.styles';

type TBottomTabsProps = {
  routeName: string;
};

const navigationButtons = [
  {
    id: 0,
    name: 'Home',
    title: 'Shop',
    icon: Menu,
  },
  {
    id: 1,
    name: 'Search',
    title: 'Search',
    icon: SearchNormal1,
  },
  {
    id: 2,
    name: 'Account',
    title: 'Account',
    icon: Profile,
  },
  {
    id: 3,
    name: 'Wishlist',
    title: 'Wishlist',
    icon: Heart,
  },
  {
    id: 4,
    name: 'Cart',
    title: 'Cart',
    icon: Bag2,
  },
];

export default function BottomTabs({ routeName }: TBottomTabsProps) {
  const styles = getStyles();
  const navigation = useAppNavigation();

  const navigateTo = (screen: string) => {
    if (screen === routeName) {
      return;
    }
    navigation.dispatch(StackActions.replace(screen));
  };

  const isActive = name => routeName === name;

  return (
    <View style={styles.container}>
      {navigationButtons.map(item => (
        <Button
          key={item.id}
          onPress={() => navigateTo(item.name)}
          style={styles.tabButton}>
          <item.icon
            color={isActive(item.name) ? '#fff' : 'rgba(255, 255, 255, 0.5)'}
          />
          <Typography
            style={
              isActive(item.name)
                ? styles.activeTabButtonText
                : styles.tabButtonText
            }>
            {item.name}
          </Typography>
        </Button>
      ))}
    </View>
  );
}
