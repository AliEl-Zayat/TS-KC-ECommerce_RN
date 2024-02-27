import { Typography } from '@src/components';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const screenWidth = Dimensions.get('window').width - 40;
const itemPerRow = 3;
const gap = 20;
const totalGapSize = (itemPerRow - 1) * gap;
const childWidth = (screenWidth - totalGapSize) / itemPerRow;

type TGridListProps<T> = {
  data: T[];
  renderItem: (record: T) => React.ReactNode;
};

type hasId = {
  id?: number;
};

const GridList = <T extends hasId>({ data, renderItem }: TGridListProps<T>) => {
  const categoriesList =
    data.length > 0 ? (
      data.map(record => (
        <View style={styles.gridItem} key={record.id}>
          {renderItem(record)}
        </View>
      ))
    ) : (
      <Typography>There are no categories</Typography>
    );

  return <View style={styles.container}>{categoriesList}</View>;
};

export default GridList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -(gap / 2),
    paddingHorizontal: 20,
    rowGap: gap,
  },
  gridItem: {
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
    aspectRatio: 1,
  },
});
