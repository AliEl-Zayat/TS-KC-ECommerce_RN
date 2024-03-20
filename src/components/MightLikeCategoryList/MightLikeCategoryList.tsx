import React, { useEffect, useRef, useState } from 'react';

import { actGetMightLikeCategories } from '@src/store/categories/mightLikeCategoriesSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { TBanner } from '@src/types';
import {
  Animated,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { MightLikeCategoryItem, Typography } from '..';
import Loading from '../Loading';
import { FlatList } from '../common';
import getStyles from './MightLikeCategoryList.styles';

const width = Dimensions.get('window').width;

type TMightLikeCategoryListProps = {};

type TPaginationProps = {
  records: TBanner[];
  scrollX: Animated.Value;
};

const Pagination = ({ records, scrollX }: TPaginationProps) => {
  const array = Array.from({ length: records.length - 1 });
  return array.map((record, idx) => {
    const inputRange = [
      ((idx - 1) * width) / 2 - 15,
      (idx * width) / 2 - 15,
      ((idx + 1) * width) / 2 - 15,
    ];

    const borderColor = scrollX.interpolate({
      inputRange,
      outputRange: ['transparent', '#fff', 'transparent'],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        key={idx.toString()}
        style={{
          width: 16,
          height: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 6,
            height: 6,
            borderRadius: 6,
            backgroundColor: '#fff',
          }}
        />
      </Animated.View>
    );
  });
};

const MightLikeCategoryList = ({}: TMightLikeCategoryListProps) => {
  const styles = getStyles();

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    state => state.mightLikeCategories,
  );

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / width / 2 - 15);
    setCurrentIndex(index);
  };

  useEffect(() => {
    dispatch(actGetMightLikeCategories());
  }, [dispatch]);

  return (
    <View style={styles.sectionWrapper}>
      <Loading status={loading} error={error}>
        <Typography style={styles.sectionHeader} size={22}>
          Categories you might like
        </Typography>
        <FlatList
          horizontal
          data={records}
          style={styles.flatList}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => <MightLikeCategoryItem {...item} />}
          snapToAlignment="start"
          viewabilityConfig={{
            itemVisiblePercentThreshold: 90,
          }}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          pagingEnabled
          decelerationRate={'fast'}
          snapToInterval={currentIndex === 0 ? width : width / 2 - 15}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
        />
        <View style={styles.paginationContainer}>
          <Pagination records={records} scrollX={scrollX} />
        </View>
      </Loading>
    </View>
  );
};

export default MightLikeCategoryList;
