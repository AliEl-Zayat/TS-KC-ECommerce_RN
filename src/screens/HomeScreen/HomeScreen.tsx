import { Header } from '@src/components/common';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './HomeScreen.styles';
import { BannersList, CategoriesList, SectionsList } from '@src/components';

export default function HomeScreen() {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CategoriesList />
      <SectionsList />
      <BannersList />
    </SafeAreaView>
  );
}
