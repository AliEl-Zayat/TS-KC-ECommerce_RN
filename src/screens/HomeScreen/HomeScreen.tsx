import CategoryItem from '@src/components/CategoryItem';
import { GridList, Header } from '@src/components/common';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './HomeScreen.styles';

type TCategory = {
  id: number;
  title: string;
  prefix: string;
  img: string;
};

const data: TCategory[] = [
  {
    id: 1,
    title: 'men',
    prefix: 'men',
    img: 'https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg',
  },
  {
    id: 2,
    title: 'women',
    prefix: 'women',
    img: 'https://cdn-eu.dynamicyield.com/api/9876644/images/30d354267a09b__hp-w12-22032022-h_m-women_dresses.jpg',
  },
  {
    id: 3,
    title: 'kids',
    prefix: 'kids',
    img: 'https://cdn-eu.dynamicyield.com/api/9876644/images/37d243d334c63__hp-w12-22032022-h_m-kids1.jpg',
  },
  {
    id: 4,
    title: 'baby',
    prefix: 'baby',
    img: 'https://cdn-eu.dynamicyield.com/api/9876644/images/28948d47ae6e8__h_m-w39-28092022-4066c-1x1.jpg',
  },
  {
    id: 5,
    title: 'sport',
    prefix: 'sport',
    img: 'https://cdn-eu.dynamicyield.com/api/9876644/images/1dda9ae79a671__h_m-w40-06102022-7416b-1x1.jpg',
  },
];

export default function HomeScreen() {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content} />
      <GridList data={data} renderItem={item => <CategoryItem {...item} />} />
    </SafeAreaView>
  );
}
