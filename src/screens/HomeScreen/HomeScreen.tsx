import {
  BannersList,
  CategoriesList,
  CollectionsList,
  EcomonyFavorites,
  MightLikeCategoryList,
  SectionsList,
} from '@src/components';
import { Header } from '@src/components/common';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './HomeScreen.styles';

export default function HomeScreen() {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* <CategoriesList /> */}
        <SectionsList />
        <BannersList />
        <MightLikeCategoryList />
        <CollectionsList />
        <EcomonyFavorites />
      </ScrollView>
    </SafeAreaView>
  );
}
