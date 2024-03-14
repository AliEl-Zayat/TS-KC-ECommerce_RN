import React, { useEffect } from 'react';

import getStyles from './BannersList.styles';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { actGetBanners } from '@src/store/banners/bannersSlice';
import Loading from '../Loading';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { BannerItem } from '..';

const BannersList = () => {
  const styles = getStyles();
  const dispatch = useAppDispatch();

  const { error, loading, records } = useAppSelector(state => state.banners);

  useEffect(() => {
    dispatch(actGetBanners());
  }, [dispatch]);

  return (
    <Loading status={loading} error={error}>
      <View style={styles.sectionsListContainer}>
        <FlatList
          horizontal
          data={records}
          contentContainerStyle={styles.sectionsList}
          renderItem={({ item }) => <BannerItem {...item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
          pagingEnabled={true}
          decelerationRate={'fast'}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            right: 0,
            left: 0,
            gap: 12,
          }}>
          {records.map(item => {
            return (
              <View
                key={item.id}
                style={{
                  backgroundColor: '#00000029',
                  borderRadius: 999,
                  width: 16,
                  height: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 999,
                    backgroundColor: '#000',
                    width: 6,
                    height: 6,
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    </Loading>
  );
};

export default BannersList;
