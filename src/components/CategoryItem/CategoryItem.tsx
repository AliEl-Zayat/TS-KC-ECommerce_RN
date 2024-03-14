import React from 'react';
import getStyles from './CategoryItem.styles';
import { TCategory } from '@src/types';
import { Typography } from '@components/index';
import { Button } from '@components/common';
import { useAppNavigation } from '@src/hooks/useAppNavigation';

type TCategoryExtended = TCategory & { isActive: boolean };

export default function CategoryItem({ title, isActive }: TCategoryExtended) {
  const { navigate } = useAppNavigation();
  const styles = getStyles();

  return (
    <Button
      onPress={() => {}}
      style={[styles.container, isActive && styles.activeButton]}>
      <Typography style={styles.title}>{title}</Typography>
    </Button>
  );
}
