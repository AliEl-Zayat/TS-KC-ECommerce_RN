import React from 'react';
import { FlatListProps, FlatList as RNFlatList, View } from 'react-native';

type TFlatListProps<T> = {
  data: T[];
  renderItem: (info: {
    item: T;
    index: number;
    separators: { highlight: () => void; unhighlight: () => void };
  }) => React.ReactNode;
} & FlatListProps<T>;

type hasId = {
  id?: number;
};

const FlatList = <T extends hasId>({
  data,
  renderItem,
  ...rest
}: TFlatListProps<T>) => {
  return (
    <View style={{ flex: 1 }}>
      <RNFlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...rest}
      />
    </View>
  );
};

export default FlatList;
