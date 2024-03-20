import React, { useEffect } from 'react';

import getStyles from './BannersList.styles';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { actGetBanners } from '@src/store/banners/bannersSlice';
import Loading from '../Loading';
import { View } from 'react-native';
import { BannerItem, Carousel } from '..';

const BannersList = () => {
  const styles = getStyles();
  const dispatch = useAppDispatch();

  const { error, loading, records } = useAppSelector(state => state.banners);

  useEffect(() => {
    dispatch(actGetBanners());
  }, [dispatch]);

  return (
    <Loading status={loading} error={error}>
      <Carousel
        data={records}
        renderItem={({ item }) => <BannerItem {...item} />}
        scrollAnimationDuration={2500}
      />
    </Loading>
  );
};

export default BannersList;
