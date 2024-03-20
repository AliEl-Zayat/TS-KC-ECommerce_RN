import React, { useEffect, useRef, useState } from 'react';

import getStyles from './Carousel.styles';
import {
  Animated,
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { PaginatorCarousel } from '..';

type TCarouselProps = {
  data: any[];
  renderItem: any;
  scrollAnimationDuration: number;
  height: number;
};

let intervalId: any;

const Carousel = ({
  data = [],
  renderItem,
  scrollAnimationDuration = 2500,
  ...rest
}: TCarouselProps) => {
  const styles = getStyles();

  const [currentIndex, setCurrentIndex] = useState(0);

  const isLastSlide = currentIndex === data.length - 1;

  const slidesRef = useRef<FlatList>(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const clearCarouselInterval = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    if (data.length && scrollAnimationDuration) {
      intervalId = setInterval(() => {
        if (data.length <= 0) {
          return;
        }

        setCurrentIndex(prevIndex => {
          if (prevIndex === data.length - 1) {
            slidesRef.current?.scrollToIndex({ index: 0 });
            return 0;
          }

          slidesRef.current?.scrollToIndex({ index: prevIndex + 1 });
          return prevIndex + 1;
        });
      }, scrollAnimationDuration);

      return () => clearCarouselInterval();
    }
  }, [data.length, scrollAnimationDuration]);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    if (isLastSlide) {
      return;
    }

    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / styles.item.width);
    setCurrentIndex(index);
  };

  if (!data.length || !data) {
    return;
  }

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        pagingEnabled
        bounces={false}
        ref={slidesRef}
        scrollEventThrottle={32}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }, idx) => `${id}-${idx}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        renderItem={renderItem}
        initialNumToRender={data.length}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            slidesRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        {...rest}
      />
      <View style={{ position: 'absolute', bottom: 16, alignSelf: 'center' }}>
        <PaginatorCarousel data={data} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default Carousel;
