import React from 'react';

import { View } from 'react-native';
import { Typography } from '..';
import { FlatList } from '../common';
import getStyles from './EcomonyFavorites.styles';

type TEcomonyFavoritesProps = {};

const EcomonyFavorites = ({}: TEcomonyFavoritesProps) => {
  const styles = getStyles();
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeading}>
        <Typography style={styles.sectionHeadingTitle}>
          Ecomus’s Favorites
        </Typography>
        <Typography style={styles.sectionHeadingSubtitle}>
          {
            'Beautifully Functional. Purposefully Designed. \nConsciously Crafted.'
          }
        </Typography>
      </View>
      <FlatList />
    </View>
  );
};

export default EcomonyFavorites;
