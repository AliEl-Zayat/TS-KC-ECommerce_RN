import React, { useEffect } from 'react';

import getStyles from './SectionsList.styles';
import Loading from '../Loading';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { FlatList, View } from 'react-native';
import { SectionItem } from '..';
import { actGetSections } from '@src/store/sections/sectionsSlice';

type TSectionsListProps = {};

const SectionsList = ({}: TSectionsListProps) => {
  const styles = getStyles();

  const dispatch = useAppDispatch();

  const { error, loading, records } = useAppSelector(state => state.sections);

  useEffect(() => {
    dispatch(actGetSections());
  }, [dispatch]);

  return (
    <Loading status={loading} error={error}>
      <View style={styles.sectionsListContainer}>
        <FlatList
          horizontal
          data={records}
          contentContainerStyle={styles.sectionsList}
          renderItem={({ item }) => <SectionItem {...item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Loading>
  );
};

export default SectionsList;
