import React, { useEffect } from 'react';

import getStyles from './CategoriesList.styles';
import Loading from '../Loading';
import { FlatList, View } from 'react-native';
import CategoryItem from '../CategoryItem';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { actGetCategories } from '@src/store/categories/categoriesSlice';

type TCategoriesListProps = {};

const CategoriesList = ({}: TCategoriesListProps) => {
  const styles = getStyles();

  const dispatch = useAppDispatch();

  const { error, loading, records } = useAppSelector(state => state.categories);

  const categories = [
    ...records,
    {
      id: records.length + 1,
      title: 'FIND A Store',
      prefix: 'find_a_store',
    },
  ];

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <Loading status={loading} error={error}>
      <View style={styles.categoriesListContainer}>
        <FlatList
          horizontal
          data={categories}
          scrollEnabled={false}
          contentContainerStyle={styles.categoriesList}
          renderItem={({ item, index }) => (
            <CategoryItem isActive={index === 0} {...item} />
          )}
        />
      </View>
    </Loading>
  );
};

export default CategoriesList;
