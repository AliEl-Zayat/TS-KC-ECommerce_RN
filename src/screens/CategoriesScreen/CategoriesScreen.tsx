import { Typography } from '@src/components';
import CategoryItem from '@src/components/CategoryItem';
import Loading from '@src/components/Loading';
import { GridList, Header } from '@src/components/common';
import { actGetCategories } from '@src/store/categories/categoriesSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './CategoriesScreen.styles';

export default function CategoriesScreen() {
  const styles = getStyles();

  const dispatch = useAppDispatch();
  const { records, error, loading } = useAppSelector(state => state.categories);

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Typography size={24}>Categories</Typography>
      </View>
      <Loading status={loading} error={error}>
        <GridList
          data={records}
          renderItem={item => <CategoryItem {...item} />}
        />
      </Loading>
    </SafeAreaView>
  );
}
