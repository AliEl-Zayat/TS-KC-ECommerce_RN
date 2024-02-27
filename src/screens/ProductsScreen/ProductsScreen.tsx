import { useRoute } from '@react-navigation/native';
import BackButton from '@src/components/BackButton';
import ImageTitleSubtitle from '@src/components/ImageTitleSubtitle';
import Loading from '@src/components/Loading';
import ProductItem from '@src/components/ProductItem';
import { FlatList } from '@src/components/common';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from '@src/store/products/productsSlice';
import { TProductsScreenRouteProp } from '@src/types';
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './ProductsScreen.styles';

export default function ProductsScreen() {
  const styles = getStyles();

  const dispatch = useAppDispatch();
  const { records, error, loading } = useAppSelector(state => state.products);

  const {
    params: { title, img, prefix },
  } = useRoute<TProductsScreenRouteProp>();

  const ItemSeparatorComponent = useCallback(() => {
    return <View style={styles.itemSeparator} />;
  }, []);

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetProductsByCatPrefix(prefix));
    }
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <ImageTitleSubtitle
          img={img}
          title={`${title} Products`}
          subtitle={`${records.length} products`}
        />
      </View>
      <Loading error={error} status={loading}>
        <FlatList
          data={records}
          numColumns={2}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={({ item }) => <ProductItem {...item} />}
          contentContainerStyle={styles.contentContainerStyle}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </Loading>
    </SafeAreaView>
  );
}
