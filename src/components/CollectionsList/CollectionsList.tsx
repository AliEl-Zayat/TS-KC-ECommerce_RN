import React, { useEffect } from 'react';

import { actGetCollections } from '@src/store/collections/collectionsSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { View } from 'react-native';
import { CollectionItem } from '..';
import Loading from '../Loading';
import { FlatList } from '../common';
import getStyles from './CollectionsList.styles';

type TCollectionsListProps = {};

const CollectionsList = ({}: TCollectionsListProps) => {
  const styles = getStyles();

  const dispatch = useAppDispatch();
  const { records, error, loading } = useAppSelector(
    state => state.collections,
  );

  useEffect(() => {
    dispatch(actGetCollections());
  }, [dispatch]);

  return (
    <Loading status={loading} error={error}>
      <View style={styles.flatlistContainer}>
        <FlatList
          horizontal
          data={records}
          renderItem={({ item }) => <CollectionItem {...item} />}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </Loading>
  );
};

export default CollectionsList;
