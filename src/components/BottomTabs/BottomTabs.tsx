import React from 'react';
import { View } from 'react-native';
import getStyles from './BottomTabs.styles';
import HomeIcon from '@src/assets/icons/HomeIcon';
import Typography from '../Typography';
import { Button } from '@components/common';
import { ShopIcon, SettingIcon, ProfileIcon } from '@icons';
import { StackActions } from '@react-navigation/native';
import { useAppNavigation } from '@src/hooks/useAppNavigation';

type TBottomTabsProps = {
  routeName: string;
};

const navigationButtons = [
  {
    id: 0,
    name: 'Home',
    icon: HomeIcon,
  },
  {
    id: 1,
    name: 'Categories',
    icon: ShopIcon,
  },
  {
    id: 2,
    name: 'Setting',
    icon: SettingIcon,
  },
  {
    id: 3,
    name: 'Profile',
    icon: ProfileIcon,
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
