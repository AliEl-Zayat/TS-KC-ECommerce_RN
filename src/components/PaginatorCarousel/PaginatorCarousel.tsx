import React from 'react';
import { Animated, useWindowDimensions, View } from 'react-native';
import getStyles from './PaginatorCarousel.styles';

type TPaginatorProps = {
  data: any[];
  scrollX: Animated.Value;
};

const Paginator = ({ data = [], scrollX }: TPaginatorProps) => {
  const styles = getStyles();

  const { width } = useWindowDimensions();

  return (
    <View style={styles.wrapper}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['transparent', '#00000029', 'transparent'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              {
                backgroundColor,
              },
            ]}>
            <View style={styles.activeDot} />
          </Animated.View>
        );
      })}
    </View>
  );
};

export default Paginator;
